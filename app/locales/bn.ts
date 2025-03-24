import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";

const isApp = !!getClientConfig()?.isApp;

const bn = {
  WIP: "এই ফিচারটি এখনও উন্নয়নের পর্যায়ে আছে...",
  Error: {
    Unauthorized: isApp
      ? `😆 কথোপকথনে কিছু সমস্যা হয়েছে, চিন্তা করবেন না:
       \\ 1️⃣ কোনো কনফিগারেশন ছাড়াই ব্যবহার করতে চান, [এখানে ক্লিক করে কথোপকথন শুরু করুন 🚀](${SAAS_CHAT_UTM_URL})
       \\ 2️⃣ যদি আপনি আপনার নিজের OpenAI রিসোর্স ব্যবহার করতে চান, [এখানে ক্লিক করুন](/#/settings) সেটিংস পরিবর্তন করতে ⚙️`
      : `😆 কথোপকথনে কিছু সমস্যা হয়েছে, চিন্তা করবেন না:
       \ 1️⃣ কোনো কনফিগারেশন ছাড়াই ব্যবহার করতে চান, [এখানে ক্লিক করে কথোপকথন শুরু করুন 🚀](${SAAS_CHAT_UTM_URL})
       \ 2️⃣ যদি আপনি প্রাইভেট ডিপ্লয়মেন্ট ভার্সন ব্যবহার করছেন, [এখানে ক্লিক করুন](/#/auth) অ্যাক্সেস কী প্রবেশ করাতে 🔑
       \ 3️⃣ যদি আপনি আপনার নিজের OpenAI রিসোর্স ব্যবহার করতে চান, [এখানে ক্লিক করুন](/#/settings) সেটিংস পরিবর্তন করতে ⚙️
       `,
  },
  Auth: {
    Return: "ফিরে যান",
    Title: "পাসওয়ার্ড প্রয়োজন",
    Tips: "অ্যাডমিন পাসওয়ার্ড যাচাই সক্রিয় করেছেন, নিচে অ্যাক্সেস কোড প্রবেশ করুন",
    SubTips: "অথবা আপনার OpenAI বা Google AI কী প্রবেশ করুন",
    Input: "এখানে অ্যাক্সেস কোড প্রবেশ করুন",
    Confirm: "নিশ্চিত করুন",
    Later: "পরে বলুন",
    SaasTips: "কনফিগারেশন ঝামেলা, এখনই ব্যবহার করতে চান",
    TopTips:
      "🥳 NextGPT AI প্রথম প্রকাশের অফার, এখনই OpenAI o1, GPT-4o, Claude-3.5 সহ সর্বশেষ বড় মডেলগুলি আনলক করুন",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} টি কথোপকথন`,
  },
  Chat: {
    SubTitle: (count: number) => `মোট ${count} টি কথোপকথন`,
    EditMessage: {
      Title: "বার্তা সম্পাদনা করুন",
      Topic: {
        Title: "চ্যাটের বিষয়",
        SubTitle: "বর্তমান চ্যাটের বিষয় পরিবর্তন করুন",
      },
    },
    Actions: {
      ChatList: "বার্তার তালিকা দেখুন",
      CompressedHistory: "সংকুচিত ইতিহাস প্রম্পট দেখুন",
      Export: "চ্যাট রেকর্ড রপ্তানি করুন",
      Copy: "কপি করুন",
      Stop: "থামান",
      Retry: "পুনরায় চেষ্টা করুন",
      Pin: "পিন করুন",
      PinToastContent: "1 টি কথোপকথন প্রিসেট প্রম্পটে পিন করা হয়েছে",
      PinToastAction: "দেখুন",
      Delete: "মুছে ফেলুন",
      Edit: "সম্পাদনা করুন",
      FullScreen: "পূর্ণ পর্দা",
      RefreshTitle: "শিরোনাম রিফ্রেশ করুন",
      RefreshToast: "রিফ্রেশ শিরোনাম অনুরোধ পাঠানো হয়েছে",
      Speech: "পড়ুন",
      StopSpeech: "থামান",
    },
    Commands: {
      new: "নতুন চ্যাট",
      newm: "মাস্ক থেকে নতুন চ্যাট",
      next: "পরবর্তী চ্যাট",
      prev: "পূর্ববর্তী চ্যাট",
      clear: "প্রসঙ্গ মুছুন",
      fork: "চ্যাট কপি করুন",
      del: "চ্যাট মুছুন",
    },
    InputActions: {
      Stop: "প্রতিক্রিয়া থামান",
      ToBottom: "সর্বশেষে যান",
      Theme: {
        auto: "স্বয়ংক্রিয় থিম",
        light: "হালকা মোড",
        dark: "গাঢ় মোড",
      },
      Prompt: "দ্রুত নির্দেশ",
      Masks: "সব মাস্ক",
      Clear: "চ্যাট মুছুন",
      Settings: "চ্যাট সেটিংস",
      UploadImage: "ছবি আপলোড করুন",
    },
    Rename: "চ্যাটের নাম পরিবর্তন করুন",
    Typing: "টাইপ করা হচ্ছে...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} পাঠান`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter নতুন লাইন";
      }
      return inputHints + ", / পূর্ণতা ট্রিগার করুন, : কমান্ড ট্রিগার করুন";
    },
    Send: "পাঠান",
    StartSpeak: "বলুন",
    StopSpeak: "থামান",
    Config: {
      Reset: "মেমরি মুছুন",
      SaveAs: "মাস্ক হিসাবে সংরক্ষণ করুন",
    },
    IsContext: "প্রিসেট প্রম্পট",
    ShortcutKey: {
      Title: "কীবোর্ড শর্টকাট",
      newChat: "নতুন চ্যাট খুলুন",
      focusInput: "ইনপুট ফোকাস করুন",
      copyLastMessage: "শেষ প্রতিক্রিয়া কপি করুন",
      copyLastCode: "শেষ কোড ব্লক কপি করুন",
      showShortcutKey: "শর্টকাট দেখান",
      clearContext: "প্রসঙ্গ মুছুন",
    },
  },
  Export: {
    Title: "চ্যাট রেকর্ড শেয়ার করুন",
    Copy: "সব কপি করুন",
    Download: "ফাইল ডাউনলোড করুন",
    Share: "ShareGPT তে শেয়ার করুন",
    MessageFromYou: "ব্যবহারকারী",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "রপ্তানি ফরম্যাট",
      SubTitle: "Markdown টেক্সট বা PNG ছবি হিসাবে রপ্তানি করতে পারেন",
    },
    IncludeContext: {
      Title: "মাস্ক প্রসঙ্গ অন্তর্ভুক্ত করুন",
      SubTitle: "বার্তায় মাস্ক প্রসঙ্গ প্রদর্শন করবেন কিনা",
    },
    Steps: {
      Select: "নির্বাচন করুন",
      Preview: "পূর্বরূপ",
    },
    Image: {
      Toast: "স্ক্রিনশট তৈরি হচ্ছে",
      Modal: "ছবি সংরক্ষণ করতে দীর্ঘ চাপুন বা ডান ক্লিক করুন",
    },
    Artifacts: {
      Title: "শেয়ার পৃষ্ঠা",
      Error: "শেয়ার ব্যর্থ হয়েছে",
    },
  },
  Select: {
    Search: "বার্তা অনুসন্ধান করুন",
    All: "সব নির্বাচন করুন",
    Latest: "সর্বশেষ কয়েকটি",
    Clear: "নির্বাচন মুছুন",
  },
  Memory: {
    Title: "ইতিহাস সংক্ষিপ্তসার",
    EmptyContent:
      "কথোপকথনের বিষয়বস্তু খুব সংক্ষিপ্ত, সংক্ষিপ্তসার প্রয়োজন নেই",
    Send: "চ্যাট রেকর্ড স্বয়ংক্রিয়ভাবে সংকুচিত করুন এবং প্রসঙ্গ হিসাবে পাঠান",
    Copy: "সংক্ষিপ্তসার কপি করুন",
    Reset: "[অব্যবহৃত]",
    ResetConfirm: "ইতিহাস সংক্ষিপ্তসার মুছতে নিশ্চিত করুন?",
  },
  Home: {
    NewChat: "নতুন চ্যাট",
    DeleteChat: "নির্বাচিত কথোপকথন মুছতে নিশ্চিত?",
    DeleteToast: "কথোপকথন মুছে ফেলা হয়েছে",
    Revert: "প্রত্যাহার",
  },
  Settings: {
    Title: "সেটিংস",
    SubTitle: "সব সেটিংস অপশন",
    ShowPassword: "পাসওয়ার্ড দেখান",

    Danger: {
      Reset: {
        Title: "সব সেটিংস রিসেট করুন",
        SubTitle: "সব সেটিংস ডিফল্ট মানে রিসেট করুন",
        Action: "এখনই রিসেট করুন",
        Confirm: "সব সেটিংস রিসেট করতে নিশ্চিত?",
      },
      Clear: {
        Title: "সব ডেটা মুছুন",
        SubTitle: "সব চ্যাট, সেটিংস ডেটা মুছুন",
        Action: "এখনই মুছুন",
        Confirm: "সব চ্যাট, সেটিংস ডেটা মুছতে নিশ্চিত?",
      },
    },
    Lang: {
      Name: "Language", // দয়া করে লক্ষ্য করুন: যদি নতুন অনুবাদ যোগ করতে চান, এই মানটি অনুবাদ করবেন না, এটি `Language` হিসাবে রাখুন
      All: "সব ভাষা",
    },
    Avatar: "অবতার",
    FontSize: {
      Title: "ফন্ট সাইজ",
      SubTitle: "চ্যাট বিষয়বস্তুর ফন্ট সাইজ",
    },
    FontFamily: {
      Title: "চ্যাট ফন্ট",
      SubTitle:
        "চ্যাট বিষয়বস্তুর ফন্ট, যদি খালি থাকে তবে গ্লোবাল ডিফল্ট ফন্ট প্রয়োগ হবে",
      Placeholder: "ফন্টের নাম",
    },
    InjectSystemPrompts: {
      Title: "সিস্টেম প্রম্পট ইনজেক্ট করুন",
      SubTitle:
        "প্রতিটি অনুরোধের বার্তা তালিকার শুরুতে ChatGPT এর সিস্টেম প্রম্পট যোগ করুন",
    },
    InputTemplate: {
      Title: "ব্যবহারকারী ইনপুট প্রিপ্রসেসিং",
      SubTitle: "ব্যবহারকারীর সর্বশেষ বার্তা এই টেমপ্লেটে পূরণ হবে",
    },

    Update: {
      Version: (x: string) => `বর্তমান সংস্করণ: ${x}`,
      IsLatest: "এটি সর্বশেষ সংস্করণ",
      CheckUpdate: "আপডেট চেক করুন",
      IsChecking: "আপডেট চেক করা হচ্ছে...",
      FoundUpdate: (x: string) => `নতুন সংস্করণ পাওয়া গেছে: ${x}`,
      GoToUpdate: "আপডেট করতে যান",
      Success: "আপডেট সফল হয়েছে!",
      Failed: "আপডেট ব্যর্থ হয়েছে",
    },
    SendKey: "পাঠানোর কী",
    Theme: "থিম",
    TightBorder: "বর্ডারলেস মোড",
    SendPreviewBubble: {
      Title: "প্রিভিউ বাবল",
      SubTitle: "প্রিভিউ বাবলে Markdown বিষয়বস্তু প্রিভিউ করুন",
    },
    AutoGenerateTitle: {
      Title: "স্বয়ংক্রিয়ভাবে শিরোনাম তৈরি করুন",
      SubTitle: "কথোপকথনের বিষয়বস্তু অনুযায়ী উপযুক্ত শিরোনাম তৈরি করুন",
    },
    Sync: {
      CloudState: "ক্লাউড ডেটা",
      NotSyncYet: "এখনও সিঙ্ক করা হয়নি",
      Success: "সিঙ্ক সফল হয়েছে",
      Fail: "সিঙ্ক ব্যর্থ হয়েছে",

      Config: {
        Modal: {
          Title: "ক্লাউড সিঙ্ক কনফিগার করুন",
          Check: "উপলব্ধতা চেক করুন",
        },
        SyncType: {
          Title: "সিঙ্ক টাইপ",
          SubTitle: "প্রিয় সিঙ্ক সার্ভার নির্বাচন করুন",
        },
        Proxy: {
          Title: "প্রক্সি সক্রিয় করুন",
          SubTitle:
            "ব্রাউজারে সিঙ্ক করার সময়, ক্রস-অরিজিন সীমাবদ্ধতা এড়াতে প্রক্সি সক্রিয় করতে হবে",
        },
        ProxyUrl: {
          Title: "প্রক্সি ঠিকানা",
          SubTitle:
            "শুধুমাত্র এই প্রকল্পের অন্তর্নির্মিত ক্রস-অরিজিন প্রক্সির জন্য প্রযোজ্য",
        },

        WebDav: {
          Endpoint: "WebDAV ঠিকানা",
          UserName: "ব্যবহারকারীর নাম",
          Password: "পাসওয়ার্ড",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "ব্যাকআপ নাম",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "স্থানীয় ডেটা",
      Overview: (overview: any) => {
        return `${overview.chat} টি কথোপকথন, ${overview.message} টি বার্তা, ${overview.prompt} টি প্রম্পট, ${overview.mask} টি মাস্ক`;
      },
      ImportFailed: "আমদানি ব্যর্থ হয়েছে",
    },
    Mask: {
      Splash: {
        Title: "মাস্ক স্টার্ট পৃষ্ঠা",
        SubTitle:
          "নতুন চ্যাট তৈরি করার সময়, মাস্ক স্টার্ট পৃষ্ঠা প্রদর্শন করুন",
      },
      Builtin: {
        Title: "অন্তর্নির্মিত মাস্ক লুকান",
        SubTitle: "সব মাস্ক তালিকায় অন্তর্নির্মিত মাস্ক লুকান",
      },
    },
    Prompt: {
      Disable: {
        Title: "প্রম্পট স্বয়ংক্রিয় পূর্ণতা নিষ্ক্রিয় করুন",
        SubTitle:
          "ইনপুট বক্সের শুরুতে / প্রবেশ করালে স্বয়ংক্রিয় পূর্ণতা ট্রিগার হবে",
      },
      List: "কাস্টম প্রম্পট তালিকা",
      ListCount: (builtin: number, custom: number) =>
        `অন্তর্নির্মিত ${builtin} টি, ব্যবহারকারী সংজ্ঞায়িত ${custom} টি`,
      Edit: "সম্পাদনা করুন",
      Modal: {
        Title: "প্রম্পট তালিকা",
        Add: "নতুন তৈরি করুন",
        Search: "প্রম্পট অনুসন্ধান করুন",
      },
      EditModal: {
        Title: "প্রম্পট সম্পাদনা করুন",
      },
    },
    HistoryCount: {
      Title: "ইতিহাস বার্তার সংখ্যা",
      SubTitle: "প্রতিটি অনুরোধের সাথে ইতিহাস বার্তার সংখ্যা",
    },
    CompressThreshold: {
      Title: "ইতিহাস বার্তার দৈর্ঘ্য সংকোচনের সীমা",
      SubTitle:
        "সংকুচিত না হওয়া ইতিহাস বার্তা এই মান অতিক্রম করলে, সংকোচন করা হবে",
    },

    Usage: {
      Title: "ব্যালেন্স চেক",
      SubTitle(used: any, total: any) {
        return `এই মাসে $${used} ব্যবহার হয়েছে, মোট সাবস্ক্রিপশন $${total}`;
      },
      IsChecking: "চেক করা হচ্ছে...",
      Check: "পুনরায় চেক করুন",
      NoAccess: "API Key বা অ্যাক্সেস পাসওয়ার্ড প্রবেশ করে ব্যালেন্স দেখুন",
    },

    Access: {
      SaasStart: {
        Title: "NextGPT AI ব্যবহার করুন",
        Label: "（সবচেয়ে সাশ্রয়ী সমাধান）",
        SubTitle:
          "NextGPT অফিসিয়াল দ্বারা রক্ষণাবেক্ষিত, কোনো কনফিগারেশন ছাড়াই ব্যবহারযোগ্য, OpenAI o1, GPT-4o, Claude-3.5 সহ সর্বশেষ বড় মডেলগুলি সমর্থন করে",
        ChatNow: "এখনই কথোপকথন করুন",
      },
      AccessCode: {
        Title: "অ্যাক্সেস পাসওয়ার্ড",
        SubTitle: "অ্যাডমিন এনক্রিপ্টেড অ্যাক্সেস সক্রিয় করেছেন",
        Placeholder: "অ্যাক্সেস পাসওয়ার্ড প্রবেশ করুন",
      },
      CustomEndpoint: {
        Title: "কাস্টম এন্ডপয়েন্ট",
        SubTitle: "কাস্টম Azure বা OpenAI সার্ভিস ব্যবহার করবেন কিনা",
      },
      Provider: {
        Title: "মডেল সার্ভিস প্রদানকারী",
        SubTitle: "বিভিন্ন প্রদানকারী পরিবর্তন করুন",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle:
            "কাস্টম OpenAI Key ব্যবহার করে পাসওয়ার্ড অ্যাক্সেস সীমা এড়িয়ে যান",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle:
            "ডিফল্ট ঠিকানা ছাড়া, অবশ্যই http(s):// অন্তর্ভুক্ত করতে হবে",
        },
      },
      Azure: {
        ApiKey: {
          Title: "API Key",
          SubTitle:
            "কাস্টম Azure Key ব্যবহার করে পাসওয়ার্ড অ্যাক্সেস সীমা এড়িয়ে যান",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVerion: {
          Title: "API সংস্করণ (azure api version)",
          SubTitle: "নির্দিষ্ট কিছু সংস্করণ নির্বাচন করুন",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "API Key",
          SubTitle:
            "কাস্টম Anthropic Key ব্যবহার করে পাসওয়ার্ড অ্যাক্সেস সীমা এড়িয়ে যান",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVerion: {
          Title: "API সংস্করণ (claude api version)",
          SubTitle: "একটি নির্দিষ্ট API সংস্করণ প্রবেশ করুন",
        },
      },
      Google: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Google AI থেকে আপনার API Key পান",
          Placeholder: "Google AI API KEY",
        },

        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVersion: {
          Title: "API সংস্করণ (শুধুমাত্র gemini-pro এর জন্য)",
          SubTitle: "একটি নির্দিষ্ট API সংস্করণ নির্বাচন করুন",
        },
        GoogleSafetySettings: {
          Title: "Google নিরাপত্তা ফিল্টারিং স্তর",
          SubTitle: "গুগল নিরাপত্তা ফিল্টারিং স্তর নির্বাচন করুন",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম Baidu API কী ব্যবহার করুন",
          Placeholder: "Baidu API কী",
        },
        SecretKey: {
          Title: "সিক্রেট কী",
          SubTitle: "কাস্টম Baidu সিক্রেট কী ব্যবহার করুন",
          Placeholder: "Baidu সিক্রেট কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: ".env কনফিগারেশনে কাস্টম সমর্থন নেই",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম Tencent ক্লাউড API কী ব্যবহার করুন",
          Placeholder: "Tencent API কী",
        },
        SecretKey: {
          Title: "সিক্রেট কী",
          SubTitle: "কাস্টম Tencent ক্লাউড সিক্রেট কী ব্যবহার করুন",
          Placeholder: "Tencent সিক্রেট কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: ".env কনফিগারেশনে কাস্টম সমর্থন নেই",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম ByteDance API কী ব্যবহার করুন",
          Placeholder: "ByteDance API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম Alibaba ক্লাউড API কী ব্যবহার করুন",
          Placeholder: "Alibaba ক্লাউড API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম Moonshot API কী ব্যবহার করুন",
          Placeholder: "Moonshot API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম DeepSeek API কী ব্যবহার করুন",
          Placeholder: "DeepSeek API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      XAI: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম XAI API কী ব্যবহার করুন",
          Placeholder: "XAI API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম ChatGLM API কী ব্যবহার করুন",
          Placeholder: "ChatGLM API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      Stability: {
        ApiKey: {
          Title: "API কী",
          SubTitle: "কাস্টম Stability API কী ব্যবহার করুন",
          Placeholder: "Stability API কী",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "ApiKey",
          SubTitle: "讯飞星火 কনসোল থেকে প্রাপ্ত APIKey",
          Placeholder: "APIKey",
        },
        ApiSecret: {
          Title: "ApiSecret",
          SubTitle: "讯飞星火 কনসোল থেকে প্রাপ্ত APISecret",
          Placeholder: "APISecret",
        },
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      CustomModel: {
        Title: "কাস্টম মডেল নাম",
        SubTitle: "কাস্টম মডেল অপশন যোগ করুন, ইংরেজি কমা দিয়ে আলাদা করুন",
      },
    },

    Model: "মডেল (model)",
    CompressModel: {
      Title: "কথোপকথন সংক্ষিপ্তসার মডেল",
      SubTitle:
        "ইতিহাস রেকর্ড সংকুচিত করতে এবং কথোপকথনের শিরোনাম তৈরি করতে ব্যবহৃত মডেল",
    },
    Temperature: {
      Title: "র্যান্ডমনেস (temperature)",
      SubTitle: "মান যত বড় হবে, প্রতিক্রিয়া তত র্যান্ডম হবে",
    },
    TopP: {
      Title: "নিউক্লিয়ার স্যাম্পলিং (top_p)",
      SubTitle:
        "র্যান্ডমনেসের মতো, তবে র্যান্ডমনেসের সাথে একসাথে পরিবর্তন করবেন না",
    },
    MaxTokens: {
      Title: "একক প্রতিক্রিয়া সীমা (max_tokens)",
      SubTitle: "একক ইন্টারঅ্যাকশনে ব্যবহৃত সর্বাধিক টোকেন সংখ্যা",
    },
    PresencePenalty: {
      Title: "বিষয়বস্তু নতুনত্ব (presence_penalty)",
      SubTitle:
        "মান যত বড় হবে, নতুন বিষয়বস্তুতে প্রসারিত হওয়ার সম্ভাবনা তত বেশি",
    },
    FrequencyPenalty: {
      Title: "ফ্রিকোয়েন্সি পেনাল্টি (frequency_penalty)",
      SubTitle: "মান যত বড় হবে, পুনরাবৃত্ত শব্দ কমানোর সম্ভাবনা তত বেশি",
    },
    TTS: {
      Enable: {
        Title: "টেক্সট টু স্পিচ সক্রিয় করুন",
        SubTitle: "টেক্সট থেকে স্পিচ সার্ভিস সক্রিয় করুন",
      },
      Autoplay: {
        Title: "স্বয়ংক্রিয়ভাবে পড়া সক্রিয় করুন",
        SubTitle:
          "স্বয়ংক্রিয়ভাবে স্পিচ তৈরি করুন এবং প্লে করুন, প্রথমে টেক্সট টু স্পিচ সক্রিয় করতে হবে",
      },
      Model: "মডেল",
      Engine: "রূপান্তর ইঞ্জিন",
      Voice: {
        Title: "কণ্ঠস্বর",
        SubTitle: "স্পিচ তৈরি করার সময় ব্যবহৃত কণ্ঠস্বর",
      },
      Speed: {
        Title: "গতি",
        SubTitle: "স্পিচ তৈরির গতি",
      },
    },
    Realtime: {
      Enable: {
        Title: "রিয়েলটাইম চ্যাট",
        SubTitle: "রিয়েলটাইম চ্যাট ফিচার সক্রিয় করুন",
      },
      Provider: {
        Title: "মডেল প্রদানকারী",
        SubTitle: "বিভিন্ন প্রদানকারী পরিবর্তন করুন",
      },
      Model: {
        Title: "মডেল",
        SubTitle: "একটি মডেল নির্বাচন করুন",
      },
      ApiKey: {
        Title: "API কী",
        SubTitle: "API কী",
        Placeholder: "API কী",
      },
      Azure: {
        Endpoint: {
          Title: "এন্ডপয়েন্ট ঠিকানা",
          SubTitle: "এন্ডপয়েন্ট ঠিকানা",
        },
        Deployment: {
          Title: "ডিপ্লয়মেন্ট নাম",
          SubTitle: "ডিপ্লয়মেন্ট নাম",
        },
      },
      Temperature: {
        Title: "র্যান্ডমনেস (temperature)",
        SubTitle: "মান যত বড় হবে, প্রতিক্রিয়া তত র্যান্ডম হবে",
      },
    },
  },
  Store: {
    DefaultTopic: "নতুন চ্যাট",
    BotHello: "আপনাকে কিভাবে সাহায্য করতে পারি?",
    Error: "একটি ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন",
    Prompt: {
      History: (content: string) =>
        "এটি পূর্ববর্তী কথোপকথনের সংক্ষিপ্তসার: " + content,
      Topic:
        "চার থেকে পাঁচটি শব্দ ব্যবহার করে সরাসরি এই বাক্যের সংক্ষিপ্ত বিষয়টি ফেরত দিন, ব্যাখ্যা করবেন না, বিরামচিহ্ন ব্যবহার করবেন না, আবেগ প্রকাশ করবেন না, অতিরিক্ত পাঠ্য ব্যবহার করবেন না, বোল্ড করবেন না, যদি কোনও বিষয় না থাকে, সরাসরি 'আড্ডা' ফেরত দিন",
      Summarize:
        "কথোপকথনের বিষয়বস্তু সংক্ষেপে সংক্ষেপ করুন, পরবর্তী প্রসঙ্গ প্রম্পট হিসাবে ব্যবহারের জন্য, ২০০ শব্দের মধ্যে সীমাবদ্ধ",
    },
  },
  Copy: {
    Success: "ক্লিপবোর্ডে কপি করা হয়েছে",
    Failed: "কপি ব্যর্থ হয়েছে, অনুগ্রহ করে ক্লিপবোর্ড অনুমতি দিন",
  },
  Download: {
    Success: "বিষয়বস্তু আপনার ডিরেক্টরিতে ডাউনলোড করা হয়েছে।",
    Failed: "ডাউনলোড ব্যর্থ হয়েছে।",
  },
  Context: {
    Toast: (x: any) => `${x} টি প্রিসেট প্রম্পট অন্তর্ভুক্ত`,
    Edit: "বর্তমান কথোপকথনের সেটিংস",
    Add: "একটি নতুন কথোপকথন যোগ করুন",
    Clear: "প্রসঙ্গ মুছে ফেলা হয়েছে",
    Revert: "প্রসঙ্গ পুনরুদ্ধার করুন",
  },
  Discovery: {
    Name: "আবিষ্কার",
  },
  FineTuned: {
    Sysmessage: "আপনি একজন সহকারী",
  },
  SearchChat: {
    Name: "কথোপকথন অনুসন্ধান করুন",
    Page: {
      Title: "কথোপকথন অনুসন্ধান করুন",
      Search: "অনুসন্ধান কীওয়ার্ড প্রবেশ করুন",
      NoResult: "কোন ফলাফল পাওয়া যায়নি",
      NoData: "কোন তথ্য নেই",
      Loading: "লোড হচ্ছে",

      SubTitle: (count: number) => `${count} টি ফলাফল পাওয়া গেছে`,
    },
    Item: {
      View: "দেখুন",
    },
  },
  Plugin: {
    Name: "প্লাগইন",
    Page: {
      Title: "প্লাগইন",
      SubTitle: (count: number) => `${count} টি প্লাগইন`,
      Search: "প্লাগইন অনুসন্ধান করুন",
      Create: "নতুন তৈরি করুন",
      Find: "আপনি Github এ চমৎকার প্লাগইনগুলি খুঁজে পেতে পারেন:",
    },
    Item: {
      Info: (count: number) => `${count} টি পদ্ধতি`,
      View: "দেখুন",
      Edit: "সম্পাদনা করুন",
      Delete: "মুছে ফেলুন",
      DeleteConfirm: "মুছে ফেলতে নিশ্চিত?",
    },
    Auth: {
      None: "অনুমোদন প্রয়োজন নেই",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "কাস্টম",
      CustomHeader: "কাস্টম প্যারামিটার নাম",
      Token: "Token",
      Proxy: "প্রক্সি ব্যবহার করুন",
      ProxyDescription: "CORS ত্রুটি সমাধানের জন্য প্রক্সি ব্যবহার করুন",
      Location: "অবস্থান",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `প্লাগইন সম্পাদনা করুন ${readonly ? "（শুধুমাত্র পড়ার জন্য）" : ""}`,
      Download: "ডাউনলোড",
      Auth: "অনুমোদনের পদ্ধতি",
      Content: "OpenAPI Schema",
      Load: "ওয়েব থেকে লোড করুন",
      Method: "পদ্ধতি",
      Error: "ফরম্যাট ত্রুটি",
    },
  },
  Mask: {
    Name: "মাস্ক",
    Page: {
      Title: "প্রিসেট চরিত্র মাস্ক",
      SubTitle: (count: number) => `${count} টি প্রিসেট চরিত্র সংজ্ঞা`,
      Search: "চরিত্র মাস্ক অনুসন্ধান করুন",
      Create: "নতুন তৈরি করুন",
    },
    Item: {
      Info: (count: number) => `${count} টি প্রিসেট কথোপকথন অন্তর্ভুক্ত`,
      Chat: "কথোপকথন",
      View: "দেখুন",
      Edit: "সম্পাদনা করুন",
      Delete: "মুছে ফেলুন",
      DeleteConfirm: "মুছে ফেলতে নিশ্চিত?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `প্রিসেট মাস্ক সম্পাদনা করুন ${
          readonly ? "（শুধুমাত্র পড়ার জন্য）" : ""
        }`,
      Download: "প্রিসেট ডাউনলোড করুন",
      Clone: "প্রিসেট ক্লোন করুন",
    },
    Config: {
      Avatar: "চরিত্র অবতার",
      Name: "চরিত্রের নাম",
      Sync: {
        Title: "গ্লোবাল সেটিংস ব্যবহার করুন",
        SubTitle: "বর্তমান কথোপকথন গ্লোবাল মডেল সেটিংস ব্যবহার করবে কিনা",
        Confirm:
          "বর্তমান কথোপকথনের কাস্টম সেটিংস স্বয়ংক্রিয়ভাবে ওভাররাইট হবে, গ্লোবাল সেটিংস সক্রিয় করতে নিশ্চিত?",
      },
      HideContext: {
        Title: "প্রিসেট কথোপকথন লুকান",
        SubTitle:
          "লুকানোর পরে প্রিসেট কথোপকথন চ্যাট ইন্টারফেসে প্রদর্শিত হবে না",
      },
      Artifacts: {
        Title: "Artifacts সক্রিয় করুন",
        SubTitle: "সক্রিয় করার পরে সরাসরি HTML পৃষ্ঠা রেন্ডার করতে পারবেন",
      },
      CodeFold: {
        Title: "কোড ফোল্ড সক্রিয় করুন",
        SubTitle:
          "সক্রিয় করার পরে দীর্ঘ কোড ব্লক স্বয়ংক্রিয়ভাবে ফোল্ড/আনফোল্ড করতে পারবেন",
      },
      Share: {
        Title: "এই মাস্ক শেয়ার করুন",
        SubTitle: "এই মাস্কের সরাসরি লিঙ্ক তৈরি করুন",
        Action: "লিঙ্ক কপি করুন",
      },
    },
  },
  NewChat: {
    Return: "ফিরে যান",
    Skip: "সরাসরি শুরু করুন",
    NotShow: "আর দেখাবেন না",
    ConfirmNoShow:
      "নিষ্ক্রিয় করতে নিশ্চিত? নিষ্ক্রিয় করার পরে সেটিংসে পুনরায় সক্রিয় করতে পারবেন।",
    Title: "একটি মাস্ক নির্বাচন করুন",
    SubTitle: "এখন শুরু করুন, মাস্কের পিছনের আত্মার সাথে চিন্তার সংঘর্ষ",
    More: "সব দেখুন",
  },

  URLCommand: {
    Code: "লিঙ্কে অ্যাক্সেস কোড অন্তর্ভুক্ত রয়েছে, স্বয়ংক্রিয়ভাবে পূরণ করতে চান?",
    Settings:
      "লিঙ্কে প্রিসেট সেটিংস অন্তর্ভুক্ত রয়েছে, স্বয়ংক্রিয়ভাবে পূরণ করতে চান?",
  },

  UI: {
    Confirm: "নিশ্চিত করুন",
    Cancel: "বাতিল করুন",
    Close: "বন্ধ করুন",
    Create: "নতুন তৈরি করুন",
    Edit: "সম্পাদনা করুন",
    Export: "রপ্তানি করুন",
    Import: "আমদানি করুন",
    Sync: "সিঙ্ক করুন",
    Config: "কনফিগার করুন",
  },
  Exporter: {
    Description: {
      Title: "শুধুমাত্র প্রসঙ্গ মুছে ফেলার পরে বার্তা প্রদর্শিত হবে",
    },
    Model: "মডেল",
    Messages: "বার্তা",
    Topic: "বিষয়",
    Time: "সময়",
  },
  SdPanel: {
    Prompt: "চিত্র প্রম্পট",
    NegativePrompt: "নেতিবাচক প্রম্পট",
    PleaseInput: (name: string) => `অনুগ্রহ করে ${name} প্রবেশ করুন`,
    AspectRatio: "আনুপাতিক হার",
    ImageStyle: "চিত্র শৈলী",
    OutFormat: "আউটপুট ফরম্যাট",
    AIModel: "AI মডেল",
    ModelVersion: "মডেল সংস্করণ",
    Submit: "জমা দিন",
    ParamIsRequired: (name: string) => `${name} প্রয়োজনীয়`,
    Styles: {
      D3Model: "3D মডেল",
      AnalogFilm: "অ্যানালগ ফিল্ম",
      Anime: "অ্যানিমে",
      Cinematic: "সিনেমাটিক",
      ComicBook: "কমিক বই",
      DigitalArt: "ডিজিটাল আর্ট",
      Enhance: "উন্নত করুন",
      FantasyArt: "ফ্যান্টাসি আর্ট",
      Isometric: "আইসোমেট্রিক",
      LineArt: "লাইন আর্ট",
      LowPoly: "লো পলি",
      ModelingCompound: "মডেলিং কম্পাউন্ড",
      NeonPunk: "নিয়ন পাঙ্ক",
      Origami: "ওরিগামি",
      Photographic: "ফটোগ্রাফিক",
      PixelArt: "পিক্সেল আর্ট",
      TileTexture: "টাইল টেক্সচার",
    },
  },
  Sd: {
    SubTitle: (count: number) => `মোট ${count} টি চিত্র`,
    Actions: {
      Params: "প্যারামিটার দেখুন",
      Copy: "প্রম্পট কপি করুন",
      Delete: "মুছে ফেলুন",
      Retry: "পুনরায় চেষ্টা করুন",
      ReturnHome: "হোমে ফিরে যান",
      History: "ইতিহাস দেখুন",
    },
    EmptyRecord: "কোন চিত্র রেকর্ড নেই",
    Status: {
      Name: "অবস্থা",
      Success: "সফল",
      Error: "ত্রুটি",
      Wait: "অপেক্ষা করছে",
      Running: "চলমান",
    },
    Danger: {
      Delete: "মুছে ফেলতে নিশ্চিত?",
    },
    GenerateParams: "প্যারামিটার তৈরি করুন",
    Detail: "বিস্তারিত",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof bn;
export type PartialLocaleType = DeepPartial<typeof bn>;

export default bn;
