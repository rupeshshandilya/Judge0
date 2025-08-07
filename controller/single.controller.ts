import axios from "axios";
import { NextFunction, Request, Response } from "express";

const testCases = [
  {
    id: 1,
    description: "Fibonacci of 0",
    stdin: "0",
    expectedOutput: "0",
  },
  {
    id: 2,
    description: "Fibonacci of 1",
    stdin: "1",
    expectedOutput: "1",
  },
  {
    id: 3,
    description: "Fibonacci of 5",
    stdin: "5",
    expectedOutput: "5",
  },
  {
    id: 4,
    description: "Fibonacci of 10",
    stdin: "10",
    expectedOutput: "55",
  },
];

// Submit batch of code submissions to Judge0
const singleSubmission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const uri = "https://judge0-ce.p.rapidapi.com/submissions";
    const api_key = process.env.JUDGE0_API_KEY;

    const sourceCode =
      "#include <iostream>\nusing namespace std;\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fib(n) << endl;\n    return 0;\n}";

    const results = [];

    for (const testCase of testCases) {
      const submissionData = {
        language_id: 54,
        source_code: sourceCode,
        stdin: testCase.stdin,
        expected_output: testCase.expectedOutput,
      };

      const response = await axios.post(uri, submissionData, {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": api_key,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      });

      results.push({
        testCase: testCase,
        result: response.data,
      });
    }

    res.status(200).json({
      message: "Token Generated Successfully",
      token: results,
    });
  } catch (error) {
    next(error);
  }
};

// Retrieve results for submitted code using tokens
const getResult = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokens = req.query.tokens;

    if (!tokens) {
      return res
        .status(400)
        .json({ error: "Missing required 'tokens' parameter" });
    }

    const uri = `https://judge0-ce.p.rapidapi.com/submissions/${tokens}`;
    const api_key = process.env.JUDGE0_API_KEY;

    const response = await axios.get(uri, {
      params: {
        tokens: tokens,
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    });

    // Decode base64 fields to make results human-readable
    const decodedSubmissions = {
      ...response.data,
      source_code_decoded: decodeBase64Field(response.data.source_code),
      stdin_decoded: decodeBase64Field(response.data.stdin),
      expected_output_decoded: decodeBase64Field(response.data.expected_output),
      stdout_decoded: decodeBase64Field(response.data.stdout),
      stderr_decoded: decodeBase64Field(response.data.stderr),
      compile_output_decoded: decodeBase64Field(response.data.compile_output),
    };

    res.status(200).json({
      success: true,
      results: {
        submissions: decodedSubmissions,
      },
    });
  } catch (error) {
    next(error);
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

export { singleSubmission, getResult };
