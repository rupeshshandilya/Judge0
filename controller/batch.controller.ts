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
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "5 7\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "15 25\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "8 12\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "50 75\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "1 9\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "33 44\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "88 99\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "11 22\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "66 77\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "2 8\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "45 55\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "19 21\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "30 40\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "17 23\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "60 70\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "4 6\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "85 95\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "12 18\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "35 45\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "90 95\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "7 13\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "25 35\n",
    },
    {
      source_code:
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << (a + b) << endl;\n    return 0;\n}",
      language_id: 54,
      stdin: "42 58\n",
    },
  ],
};

// Config
const JUDGE0_BATCH_SIZE = 20;
const REQUEST_DELAY = 1000;

// function to split array into chunks
function splitIntoChunks(array: any[]) {
  const result = [];
  const size = JUDGE0_BATCH_SIZE;

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Submit batch of code submissions to Judge0
const batchSubmit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uri = "https://judge0-ce.p.rapidapi.com/submissions/batch";
    const api_key = process.env.JUDGE0_API_KEY;

    const submissions = data.submissions;

    // Send directly if batch size is small
    if (submissions.length <= JUDGE0_BATCH_SIZE) {
      const response = await axios.post(uri, data, {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": api_key,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      });

      res.status(200).json({
        success: true,
        totalSubmission: submissions.length,
        response: response.data,
      });
    }

    // For large batch size
    const chunks = splitIntoChunks(submissions);
    const allResults = [];

    console.log(`Split into ${chunks.length} chunks`);

    for (let i = 0; i < chunks.length; i++) {
      try {
        const response = await axios.post(
          uri,
          { submissions: chunks[i] },
          {
            headers: {
              "content-type": "application/json",
              "X-RapidAPI-Key": api_key,
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          }
        );

        if (Array.isArray(response.data)) {
          allResults.push(...response.data);
        } else {
          allResults.push(response.data);
        }

        // Wait 1 second before sending another chunk
        if (i < chunks.length - 1) {
          console.log(`Waiting ${REQUEST_DELAY}`);
          await delay(REQUEST_DELAY);
        }
      } catch (error) {
        next(error);
      }
    }

    res.status(200).json({
      success: true,
      totalSubmissions: submissions.length,
      chunksProcessed: chunks.length,
      successfulResults: allResults.length,
      response: allResults,
    });
  } catch (error) {
    next(error);
  }
};

// Retrieve results for submitted code using tokens
const getData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokens = req.query.tokens as string;

    if (!tokens) {
      return res
        .status(400)
        .json({ error: "Missing required 'tokens' parameter" });
    }

    const uri = "https://judge0-ce.p.rapidapi.com/submissions/batch";
    const api_key = process.env.JUDGE0_API_KEY;

    const tokenArray = tokens.split(",").map((token) => token.trim());

    console.log(`Retrieving results for ${tokenArray.length} tokens`);

    // If Batch size is small
    if (tokenArray.length < JUDGE0_BATCH_SIZE) {
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
          expected_output_decoded: decodeBase64Field(
            submission.expected_output
          ),
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
    }

    // For large Batch Size
    const tokenChunks = splitIntoChunks(tokenArray);
    const allSubmissions = [];

    for (let i = 0; i < tokenChunks.length; i++) {
      try {
        // Join current chunk tokens
        const chunkTokens = tokenChunks[i].join(',');

        const response = await axios.get(uri, {
          params: {
            tokens: chunkTokens,
            base64_encoded: "true",
            fields: "*",
          },
          headers: {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          },
        });

        if(response.data.submissions && Array.isArray(response.data.submissions)){
          allSubmissions.push(...response.data.submissions);
        }

        // Delay for second chunk
        if (i < tokenChunks.length - 1) {
          console.log(`Waiting ${REQUEST_DELAY}`);
          await delay(REQUEST_DELAY);
        }
      } catch (error) {
        next(error);
      }
    }

    const decodedSubmissions = allSubmissions.map(
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

    res.status(200).json({
      success: true,
      totalTokens: tokenArray.length,
      chunksProcessed: tokenChunks.length,
      successfulResults: decodedSubmissions.length,
      results: {
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
