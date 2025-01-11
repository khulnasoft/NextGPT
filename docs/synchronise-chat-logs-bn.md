# UpStash এর সাথে চ্যাট লগগুলি সিঙ্ক্রোনাইজ করুন

## প্রয়োজনীয়তা

- GitHub অ্যাকাউন্ট
- আপনার নিজস্ব NextGPT সার্ভার সেট আপ
- [UpStash](https://upstash.com)

## শুরু করা যাক

1. একটি UpStash অ্যাকাউন্টের জন্য নিবন্ধন করুন।
2. একটি ডাটাবেস তৈরি করুন।

   ![নিবন্ধন এবং লগইন](./images/upstash-1.png)

   ![ডাটাবেস তৈরি করুন](./images/upstash-2.png)

   ![সার্ভার নির্বাচন করুন](./images/upstash-3.png)

3. REST API খুঁজুন এবং UPSTASH_REDIS_REST_URL এবং UPSTASH_REDIS_REST_TOKEN কপি করুন (⚠গুরুত্বপূর্ণ⚠: আপনার টোকেন শেয়ার করবেন না!)

   ![কপি করুন](./images/upstash-4.png)

4. UPSTASH_REDIS_REST_URL এবং UPSTASH_REDIS_REST_TOKEN আপনার সিঙ্ক্রোনাইজেশন কনফিগারেশনে কপি করুন, তারপর **Check Availability** ক্লিক করুন।

   ![সিঙ্ক্রোনাইজ 1](./images/upstash-5.png)

   যদি সবকিছু ঠিক থাকে, আপনি সফলভাবে এই ধাপটি সম্পন্ন করেছেন।

   ![সিঙ্ক উপলব্ধতা পরীক্ষা সম্পন্ন](./images/upstash-6.png)

5. সফলতা!

   ![দারুণ কাজ~!](./images/upstash-7.png)
