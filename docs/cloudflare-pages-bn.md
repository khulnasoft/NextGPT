# ক্লাউডফ্লেয়ার পেজেস ডিপ্লয়মেন্ট গাইড

## কিভাবে একটি নতুন প্রকল্প তৈরি করবেন

এই প্রকল্পটি GitHub-এ ফর্ক করুন, তারপর dash.cloudflare.com-এ লগ ইন করুন এবং Pages-এ যান।

1. "Create a project" ক্লিক করুন।
2. "Connect to Git" নির্বাচন করুন।
3. ক্লাউডফ্লেয়ার পেজেসকে আপনার GitHub অ্যাকাউন্টের সাথে সংযুক্ত করুন।
4. ফর্ক করা প্রকল্পটি নির্বাচন করুন।
5. "Begin setup" ক্লিক করুন।
6. "Project name" এবং "Production branch" এর জন্য ডিফল্ট মানগুলি ব্যবহার করুন বা প্রয়োজন অনুযায়ী পরিবর্তন করুন।
7. "Build Settings" এ, "Framework presets" অপশনটি নির্বাচন করুন এবং "Next.js" নির্বাচন করুন।
8. একটি node:buffer বাগের কারণে ডিফল্ট "Build command" ব্যবহার করবেন না। পরিবর্তে, নিম্নলিখিত কমান্ডটি ব্যবহার করুন:
   ```
   npx @cloudflare/next-on-pages --experimental-minify
   ```
9. "Build output directory" এর জন্য ডিফল্ট মানটি ব্যবহার করুন এবং এটি পরিবর্তন করবেন না।
10. "Root Directory" পরিবর্তন করবেন না।
11. "Environment variables" এর জন্য, ">" ক্লিক করুন এবং তারপর "Add variable" ক্লিক করুন। নিম্নলিখিত তথ্য পূরণ করুন:

    - `NODE_VERSION=20.1`
    - `NEXT_TELEMETRY_DISABLE=1`
    - `OPENAI_API_KEY=আপনার নিজের API কী`
    - `YARN_VERSION=1.22.19`
    - `PHP_VERSION=7.4`

    প্রয়োজন অনুযায়ী নিম্নলিখিতগুলি ঐচ্ছিকভাবে পূরণ করুন:

    - `CODE= ঐচ্ছিক, অ্যাক্সেস পাসওয়ার্ড, একাধিক পাসওয়ার্ড কমা দ্বারা পৃথক করা যেতে পারে`
    - `OPENAI_ORG_ID= ঐচ্ছিক, OpenAI-এ সংস্থার আইডি নির্দিষ্ট করুন`
    - `HIDE_USER_API_KEY=1 ঐচ্ছিক, ব্যবহারকারীদের তাদের নিজস্ব API কী প্রবেশ করতে না দেওয়া`
    - `DISABLE_GPT4=1 ঐচ্ছিক, ব্যবহারকারীদের GPT-4 ব্যবহার করতে না দেওয়া`
    - `ENABLE_BALANCE_QUERY=1 ঐচ্ছিক, ব্যবহারকারীদের ব্যালেন্স প্রশ্ন করতে দেওয়া`
    - `DISABLE_FAST_LINK=1 ঐচ্ছিক, URL থেকে সেটিংস পার্স করা নিষ্ক্রিয় করুন`
    - `OPENAI_SB=1 ঐচ্ছিক, তৃতীয় পক্ষের OpenAI-SB API ব্যবহার করুন`

12. "Save and Deploy" ক্লিক করুন।
13. "Cancel deployment" ক্লিক করুন কারণ আপনাকে Compatibility flags পূরণ করতে হবে।
14. "Build settings", "Functions" এ যান এবং "Compatibility flags" খুঁজুন।
15. "Configure Production compatibility flag" এবং "Configure Preview compatibility flag" উভয়ের জন্য "nodejs_compat" পূরণ করুন।
16. "Deployments" এ যান এবং "Retry deployment" ক্লিক করুন।
17. উপভোগ করুন।
