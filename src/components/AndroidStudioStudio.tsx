import React, { useState } from 'react';
import { Download, Smartphone, Github, CheckCircle2, AlertCircle, HelpCircle, Terminal, ExternalLink } from 'lucide-react';

export const AndroidStudioStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'build' | 'diagnostics'>('build');
  const [searchQuery, setSearchQuery] = useState('');

  const issues = [
    {
      category: 'GRADLE',
      title: 'Permission Denied: ./gradlew Executable Failure',
      solution: 'GitHub Actions workflow में build चरण से पहले `chmod +x gradlew` कमांड जोड़ें।',
    },
    {
      category: 'JAVA',
      title: 'Unsupported class file major version 65 (JDK mismatch)',
      solution: 'Android Gradle Plugin (AGP 8.x) के लिए GitHub Actions में `java-version: "17"` सेट करें।',
    },
    {
      category: 'KEYSTORE',
      title: 'Keystore / Release Signing Error',
      solution: 'डेवलपमेंट के लिए Debug APK चुनें (`./gradlew assembleDebug`) जो बिना किसी कीस्टोर के पास हो जाता है।',
    },
    {
      category: 'CLOUDRUN',
      title: 'Cloud Run 403 Forbidden Access',
      solution: 'GCP IAM में `allUsers` भूमिका को `Cloud Run Invoker` अनुमति देकर पब्लिक एक्सेस दें।',
    },
  ];

  const filteredIssues = issues.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-10 px-4 lg:px-8 max-w-5xl mx-auto space-y-8 font-devanagari">
      {/* Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>ऐप एंड गेम स्टूडियो - Android WebView Starter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              हाई स्कूल ऐप का Android APK बनाएं
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              इस प्रोजेक्ट ZIP को डाउनलोड करके GitHub Actions के माध्यम से 2 मिनट में अपने फ़ोन का APK (app-debug.apk) बनाएं।
            </p>
          </div>

          <a
            href="/api/download-zip"
            download
            className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 shrink-0 text-sm whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            <span>Android Project ZIP डाउनलोड करें</span>
          </a>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('build')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'build'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white'
            }`}
          >
            APK बिल्ड प्रक्रिया (Workflow Guide)
          </button>
          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'diagnostics'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white'
            }`}
          >
            Gradle & Cloud Run एरर गाइड
          </button>
        </div>
      </div>

      {activeTab === 'build' ? (
        /* Step-by-Step Workflow Guide */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Github className="w-5 h-5 text-amber-400" />
            <span>GitHub Actions से APK बनाने के चरण (5 आसान स्टेप्स):</span>
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                  Android Project ZIP डाउनलोड करें
                </h4>
                <p className="text-xs text-slate-300">
                  ऊपर दिए गए हरे बटन "Android Project ZIP डाउनलोड करें" पर क्लिक करें।
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                2
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                  GitHub पर नई रिपोजिटरी (New Repository) बनाएं
                </h4>
                <p className="text-xs text-slate-300">
                  अपने GitHub अकाउंट में जाएँ और ZIP की सभी फ़ाइलों को एक्सट्रेक्ट करके अपलोड करें। सुनिश्चित करें कि <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded">.github/workflows/build-apk.yml</code> मौजूद है।
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                3
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                  Actions टैब में 'Run Workflow' दबाएँ
                </h4>
                <p className="text-xs text-slate-300">
                  GitHub रिपोजिटरी के "Actions" टैब में जाएँ और "Build Phone APK" वर्कफ़्लो को चुनें तथा "Run workflow" बटन पर क्लिक करें।
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                4
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                  Artifacts से APK ZIP डाउनलोड करें
                </h4>
                <p className="text-xs text-slate-300">
                  बिल्ड पूरा (हरा सही निशान) होने पर पेज के नीचे "Artifacts" अनुभाग से <code className="text-emerald-400 bg-slate-900 px-1 py-0.5 rounded">App-Game-Studio-debug-apk</code> फ़ाइल डाउनलोड करें।
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                5
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                  फ़ोन में Install करें
                </h4>
                <p className="text-xs text-slate-300">
                  डाउनलोड हुई ZIP को अनज़िप करें, उसमें मौजूद <code className="text-cyan-400 bg-slate-900 px-1 py-0.5 rounded">app-debug.apk</code> को अपने एंड्रॉइड फोन में इंस्टॉल करें और हाई स्कूल ऐप चलाएं!
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Diagnostics Hub */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" />
              <span>Gradle, Java, & Cloud Run समस्या समाधान (Diagnostics Hub)</span>
            </h3>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="एरर कोड या विषय खोजें (उदा. Gradle, JDK, Cloud Run)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <div className="space-y-3">
            {filteredIssues.map((issue, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold border border-amber-500/20">
                    {issue.category}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-rose-300">{issue.title}</h4>
                <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 font-devanagari">
                  <strong className="text-emerald-400">समाधान: </strong>
                  {issue.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
