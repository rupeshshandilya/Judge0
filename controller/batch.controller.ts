import axios from "axios";
import { NextFunction, Request, Response } from "express";

const data = {
  submissions: [
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "3 4\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "10 20\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "100 200\n",
    },
  ],
};

// Submit batch of code submissions to Judge0
const batchSubmit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uri = "https://judge0-ce.p.rapidapi.com/submissions/batch";
    const api_key = process.env.JUDGE0_API_KEY;

    const response = await axios.post(uri, data, {
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    });

    res.status(200).json({
      success: true,
      response: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// Retrieve results for submitted code using tokens
const getData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokens = req.query.tokens;

    if (!tokens) {
      return res
        .status(400)
        .json({ error: "Missing required 'tokens' parameter" });
    }

    const uri = "https://judge0-ce.p.rapidapi.com/submissions/batch";
    const api_key = process.env.JUDGE0_API_KEY;

    const response = await axios.get(uri, {
      params: {
        tokens: tokens,
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "x-rapidapi-key": api_key,
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
    });

    // Decode base64 fields to make results human-readable
    const decodedSubmissions = response.data.submissions.map(
      (submission: any) => ({
        ...submission,
        source_code_decoded: decodeBase64Field(submission.source_code),
        stdin_decoded: decodeBase64Field(submission.stdin),
        expected_output_decoded: decodeBase64Field(submission.expected_output),
        stdout_decoded: decodeBase64Field(submission.stdout),
        stderr_decoded: decodeBase64Field(submission.stderr),
        compile_output_decoded: decodeBase64Field(submission.compile_output),
      })
    );

    //  return response with both original and decoded data
    res.status(200).json({
      success: true,
      results: {
        ...response.data,
        submissions: decodedSubmissions,
      },
    });
  } catch (error) {
    next(error.message);
  }
};

// Helper function to safely decode base64 strings
function decodeBase64Field(field?: string): string | null {
  if (!field) return null;
  try {
    return Buffer.from(field, "base64").toString("utf-8");
  } catch {
    return null;
  }
}

export { batchSubmit, getData };
