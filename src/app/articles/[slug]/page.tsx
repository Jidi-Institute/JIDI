'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Dummy article data
const articles = {
  'ai-policy-framework-africa': {
    title: 'AI and Gen Z: Rethinking the Future of Africa\'s Financial Systems',
    category: 'Research',
    categoryColor: 'emerald',
    date: 'October 15, 2025',
    author: 'JIDI Institute',
    authorRole: 'AI and Data Science Research',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&auto=format&q=75',
    excerpt: 'How AI policy, demographic change, and financial innovation converge to create opportunities for Africa\'s digital native generation.',
    content: `
      <p>Across Africa, artificial intelligence is reshaping how economies grow, industries compete, and citizens interact with financial systems. Yet, as of July 2025, only 16 African countries have formally adopted national AI strategies, while 34 others remain in various stages of policy development, according to Intelpoint's mapping of AI policy adoption.</p>

      <p>This uneven progress tells a compelling story: Africa's AI transformation is underway, but its success will depend on how effectively technology is aligned with demographics and development priorities.</p>

      <p>Nowhere is this alignment more urgent—or promising—than in the financial sector, where Generation Z represents both the largest opportunity and the most demanding audience.</p>

      <p>By 2030, Gen Z—Africans born between the mid-1990s and early 2010s—will make up over 40% of the continent's workforce and consumer base (UN Population Projections, 2025). They are not just customers; they are creators, entrepreneurs, and digital natives who expect financial systems to be smart, inclusive, ethical, and personalized.</p>

      <p>For African financial institutions, this convergence of AI policy, demographic change, and financial innovation presents a once-in-a-generation opportunity to redesign banking around the digital citizen.</p>

      <h2>1. The Gen Z Imperative: Understanding the Digital Native Economy</h2>
      <p>Africa's Gen Z is redefining consumer behavior. This generation lives online, values social purpose, and interacts with financial tools primarily through mobile and social platforms.</p>

      <p>They distrust bureaucracy but value transparency. They may not visit a bank branch, but they can analyze transaction fees in real time. As The Financial Brand (2025) aptly put it, "If banks don't know Gen Z personally, they won't know them at all."</p>

      <p>Traditional banking models—built on long queues, paper forms, and standard credit products—no longer resonate. Gen Z wants:</p>
      <ul>
        <li>Hyper-personalized experiences, tailored to their financial goals.</li>
        <li>Instant, mobile-first interactions that feel intuitive.</li>
        <li>Purpose-driven brands that align with their social and environmental values.</li>
      </ul>

      <p>For banks, fintechs, and policymakers, this represents not just a market shift but a strategic reorientation: from product-centric to user-centric, from reactive to predictive, and from transactional to relational finance.</p>

      <h2>2. The AI Dividend: Policy, Innovation, and Economic Design</h2>
      <p>Africa's AI landscape is taking shape through policy leadership from countries such as Kenya, Nigeria, Ghana, Egypt, and Rwanda—each embedding AI into their national development frameworks.</p>

      <p>These strategies are not just about automation; they are about digital sovereignty, data infrastructure, and inclusive growth.</p>

      <p>By establishing regulatory sandboxes and open-data ecosystems, these countries are enabling experimentation in financial AI, creating the foundation for innovation in:</p>
      <ul>
        <li><strong>Credit Scoring:</strong> Using alternative data such as mobile usage, utility payments, and e-commerce footprints to expand access to credit for the underbanked.</li>
        <li><strong>Fraud Detection:</strong> Deploying AI to detect anomalies and prevent cyber-fraud faster than legacy systems.</li>
        <li><strong>Personalized Banking:</strong> Leveraging predictive analytics to design individualized financial experiences in real time.</li>
        <li><strong>Operational Efficiency:</strong> Using chatbots and AI-driven assistants to reduce costs while expanding financial literacy outreach.</li>
      </ul>

      <p>As Alkami (2025) observed, "Data analytics is the secret sauce for growth in financial services." For African institutions, AI isn't just a back-office tool—it is the strategic enabler of the future economy, allowing organizations to predict needs, pre-empt risks, and personalize experiences at scale.</p>

      <h2>3. Designing Finance for a Generation of Creators</h2>
      <p>The new frontier of financial inclusion lies in creative finance—products that reflect the way Gen Z earns, spends, and invests.</p>

      <p>Africa's young innovators are already active in the creator economy, freelancing across design, content, and digital platforms. Many earn through peer-to-peer transactions and global marketplaces rather than traditional employment.</p>

      <p>Financial institutions that recognize this shift can unlock immense value through AI-powered innovation such as:</p>
      <ul>
        <li><strong>Gamified Savings and Investments:</strong> Reward-based saving milestones and digital streaks that make finance fun, not formal.</li>
        <li><strong>Micro-Investing Platforms:</strong> Allowing fractional ownership of local equities, government bonds, and tokenized assets, starting from $1.</li>
        <li><strong>Social and Community Banking:</strong> Digital versions of "susu" or "tontines" that combine trust networks with mobile technology.</li>
        <li><strong>Creator Economy Credit:</strong> Tailored micro-finance and working capital for young entrepreneurs in fashion, content, and app development.</li>
        <li><strong>Digital Asset Integration:</strong> Offering secure, regulated exposure to crypto-assets, stable-coins, and tokenized commodities.</li>
      </ul>

      <p>These solutions redefine financial inclusion—not as charity, but as co-creation between institutions and youth.</p>

      <h2>4. Ghana's Strategic Position: AI Policy Meets Financial Inclusion</h2>
      <p>Ghana stands out among Africa's emerging AI leaders. With the development of its National AI Strategy, alongside active data governance initiatives and a growing fintech ecosystem, Ghana is positioned to become a regional hub for responsible AI in finance.</p>

      <p>The synergy between national policy and financial sector innovation can create measurable impact in three ways:</p>
      <ul>
        <li><strong>Regulatory Enablement:</strong> AI-ready policies that balance innovation with ethics and privacy, ensuring financial AI systems are fair, transparent, and inclusive.</li>
        <li><strong>Public–Private Collaboration:</strong> Partnerships between banks, fintechs, academia, and government to drive AI literacy, research, and solution testing.</li>
        <li><strong>Youth-Centric Programs:</strong> National initiatives that train and empower young data scientists and financial innovators to build AI tools relevant to Ghana's economy.</li>
      </ul>

      <p>Such alignment could position Ghana not only as an AI policy model, but as a financial innovation leader—exporting frameworks and solutions across the continent.</p>

      <h2>5. Strategic Implications: A Call to Action</h2>
      <p>For African banks, asset managers, and sovereign investors, the alignment of AI with Gen Z inclusion is not a peripheral trend—it's a strategic priority.</p>

      <p>The institutions that will lead the next decade of African finance are those that:</p>
      <ul>
        <li>Leverage AI for insight and personalization, not just efficiency.</li>
        <li>Invest in digital infrastructure and partnerships that extend access to underserved youth.</li>
        <li>Embrace local innovation models—combining modern technology with Africa's social finance traditions.</li>
        <li>Prioritize impact metrics such as financial literacy, gender inclusion, and sustainability alongside profit.</li>
      </ul>

      <p>This is not merely a retail transformation—it's a systemic realignment of capital flows, where inclusivity and profitability can coexist.</p>

      <h2>6. Conclusion: From Customers to Collaborators</h2>
      <p>Africa's Gen Z generation is not waiting to be included—they are building their own financial ecosystems.</p>

      <p>For policymakers and financial leaders, the question is not whether to adapt, but how fast.</p>

      <p>By harnessing AI as both a technological and policy instrument, African institutions can turn youth demographics into an engine of sustainable growth.</p>

      <p>Those that succeed will be the ones that move beyond transactional relationships and see Gen Z not as customers, but as co-architects of a new financial order—one defined by data intelligence, creativity, and shared prosperity.</p>

      <p>In the emerging AI-driven economy, Africa's financial future will belong to those who can bridge intelligence with inclusion.</p>

      <h3>About the JIDI Institute for AI and Data Science Research (JIDI-Ghana)</h3>
      <p>The JIDI Institute is a nonprofit innovation think-tank based in Accra, Ghana, dedicated to advancing responsible AI governance, data science education, and ethical digital innovation across Africa. Through research, policy engagement, and leadership development, the Institute equips organizations to navigate the intersection of technology, ethics, and human progress.</p>
    `,
    relatedArticles: ['waids-bootcamp-graduates', 'university-partnerships-announced']
  },
  'waids-bootcamp-graduates': {
    title: 'AI Governance in Africa: How Thoughtful Policy Can Unlock Innovation',
    category: 'Policy',
    categoryColor: 'blue',
    date: 'October 15, 2025',
    author: 'JIDI Institute',
    authorRole: 'AI and Data Science Research',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop&auto=format&q=75',
    excerpt: 'How thoughtful policy can unlock innovation while safeguarding society across the African continent.',
    content: `
      <p>Artificial Intelligence (AI) is reshaping how the world works — powering economies, transforming services, and redefining what's possible. For Africa, this technological revolution presents both extraordinary opportunity and profound responsibility. The continent stands at the threshold of a digital renaissance, where AI could accelerate inclusive growth, improve public services, and empower a new generation of innovators. Yet it also poses hard questions: How can African nations nurture innovation while ensuring safety, accountability, and fairness in the use of emerging technologies?</p>

      <h2>The Promise of AI in Africa</h2>
      <p>Across the continent, AI is already demonstrating its potential to address long-standing challenges.</p>

      <p>In healthcare, AI-powered platforms are predicting disease outbreaks, analyzing medical images, and extending diagnostics to remote communities with limited access to specialists.</p>

      <p>In agriculture, machine learning models and drones are helping smallholder farmers detect crop diseases early, monitor soil health, and increase yields — boosting both food security and incomes.</p>

      <p>In education, adaptive learning systems personalize lessons for students, bridging gaps in access and quality.</p>

      <p>In finance, AI is enabling financial inclusion, powering credit scoring for the unbanked, and driving growth across Africa's vibrant fintech ecosystem.</p>

      <p>These examples underscore a clear truth: AI, when harnessed thoughtfully, can be a force multiplier for human potential. It can help Africa not just catch up, but lead in solving some of the world's most urgent challenges.</p>

      <h2>The Regulatory Dilemma</h2>
      <p>But innovation without governance can deepen inequality. Without clear ethical and legal frameworks, AI can entrench bias, compromise privacy, and marginalize vulnerable communities. On the other hand, heavy-handed regulation risks stifling creativity and deterring investment.</p>

      <p>This balance — between innovation and protection — is the defining policy challenge of our time.</p>

      <p>Countries like South Africa and Kenya illustrate the complexity of getting it right. South Africa must address socioeconomic disparities and ensure AI does not reinforce existing inequities, while navigating fragmented regulatory ecosystems. Kenya, often called the Silicon Savannah, faces gaps in digital infrastructure and literacy that make equitable AI adoption a national priority. Both countries highlight that effective regulation must be context-driven, inclusive, and iterative — evolving alongside the technology itself.</p>

      <h2>Global Standards, Local Realities</h2>
      <p>International frameworks provide valuable reference points. The ISO/IEC JTC 1/SC 42 standard emphasizes risk management and governance. The OECD Principles on AI stress inclusivity, transparency, and human-centric development. And organizations like IEEE are defining ethical parameters for trustworthy AI.</p>

      <p>For African policymakers, these standards are not prescriptions — they are starting points. They must be localized to reflect Africa's social realities, linguistic diversity, and development priorities. African nations should not only adopt, but actively contribute to global AI governance conversations, ensuring their voices shape emerging norms.</p>

      <p>Alignment with international standards also enhances trust, interoperability, and investment — helping African economies integrate more deeply into the global digital economy.</p>

      <h2>Principles for Balanced AI Governance</h2>
      <p>A successful African AI policy framework should be guided by four principles:</p>
      <ul>
        <li><strong>Inclusivity:</strong> Engage governments, academia, private sector, and civil society — particularly youth, women, and underrepresented communities — in co-creating AI policies.</li>
        <li><strong>Transparency and Accountability:</strong> Require explainable, auditable AI systems to build public trust and guard against bias.</li>
        <li><strong>Flexibility:</strong> Embrace adaptive, principles-based regulation (such as sandboxes) that evolve with innovation rather than restricting it.</li>
        <li><strong>Regional Collaboration:</strong> Harmonize standards across borders through African Union frameworks, enabling shared learning and continental leadership in AI ethics and governance.</li>
      </ul>

      <h2>Learning from Early Movers</h2>
      <p>Several African nations are already taking proactive steps:</p>
      <ul>
        <li>Rwanda has developed a national AI strategy focused on digital inclusion and ethical innovation.</li>
        <li>South Africa is exploring frameworks centered on economic empowerment through AI.</li>
        <li>The African Union's Digital Transformation Strategy (2020–2030) provides a vision for harmonized governance, capacity-building, and shared digital prosperity.</li>
      </ul>

      <p>Still, progress is uneven. Infrastructure gaps, limited funding, and fragmented legal systems remain obstacles. Imported AI solutions often overlook local languages, contexts, and cultures — a reminder of the need for homegrown innovation and African-led AI ecosystems.</p>

      <h2>Shaping Africa's AI Future</h2>
      <p>Africa's AI journey is just beginning. By anchoring policy in inclusivity, transparency, flexibility, and collaboration, countries like Kenya and South Africa are charting a roadmap for others to follow. Their experiences show that thoughtful policy is not the enemy of innovation — it is its enabler.</p>

      <p>If the continent succeeds in creating frameworks that both inspire innovation and safeguard society, it can position itself as a global leader in responsible, human-centered AI.</p>

      <p>The future will not simply be imported; it will be designed — by Africans, for Africans, and with Africa's values at its core.</p>

      <h3>About the JIDI Institute for AI and Data Science Research (JIDI-Ghana)</h3>
      <p>The JIDI Institute is a nonprofit innovation think-tank based in Accra, Ghana, dedicated to advancing responsible AI governance, data science education, and ethical digital innovation across Africa. Through research, policy engagement, and leadership development, the Institute equips organizations to navigate the intersection of technology, ethics, and human progress.</p>
    `,
    relatedArticles: ['ai-policy-framework-africa', 'university-partnerships-announced']
  },
  'university-partnerships-announced': {
    title: 'Africa\'s Trillion-Dollar Opportunity: Learning from Asia\'s Data Revolution',
    category: 'Innovation',
    categoryColor: 'purple',
    date: 'October 15, 2025',
    author: 'JIDI Institute',
    authorRole: 'AI and Data Science Research',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop&auto=format&q=75',
    excerpt: 'How Africa can harness data infrastructure to unlock a trillion-dollar healthcare opportunity, inspired by Asia\'s digital transformation.',
    content: `
      <p>If you want to understand where the next global economic boom will come from, don't look to Wall Street or Silicon Valley — look to Asia.</p>

      <p>By 2030, the Asia-Pacific healthcare market will surpass $5 trillion, representing nearly a quarter of global health spending and serving 60% of the world's population. This growth isn't fueled by aid or loans — it's driven by data, digitization, and private innovation.</p>

      <p>Africa now stands at a similar crossroads. The same ingredients that powered Asia's rise — youthful populations, expanding mobile connectivity, and digital infrastructure — exist here too. But time is running out to harness them.</p>

      <h2>Data is the New Oil</h2>
      <p>Asia's demographic weight has become its greatest asset. By 2025, Southeast Asia will host over 500 million people aged 65+ and more than 100 million adults with diabetes, generating more health data than any other region.</p>

      <p>But the real differentiator isn't population — it's digital readiness.</p>

      <p>When Ant Group launched its AI healthcare app AQ, it connected nearly one million doctors to users across 100+ AI-powered services, turning raw health data into national resilience and private wealth.</p>

      <p>Africa has similar scale and health challenges — but lacks the digital infrastructure to transform its data into economic value.</p>

      <h2>Leapfrogging to AI</h2>
      <p>While Western systems grapple with outdated legacy infrastructure, Asian nations have leapfrogged directly into AI-enabled healthcare.</p>
      <ul>
        <li>Indonesia's EMC Healthcare pioneered AI-driven electronic health records that integrate real-time data across hospitals.</li>
        <li>India, through the Ayushman Bharat Digital Mission, issued 800 million digital health IDs, doubled its health budget share, and now attracts a quarter of Asia's healthcare investments.</li>
      </ul>

      <p>Africa can do the same. By embracing AI-first health strategies and enabling the private sector to build secure, interoperable systems, the continent can bypass decades of incremental reform.</p>

      <h2>Capital Follows Data</h2>
      <p>Investment always follows visibility — and visibility comes from data.</p>

      <p>In Asia-Pacific, healthcare private equity has grown 21% annually since 2016. Digital health startups now account for 44% of global health tech investments. Even during global downturns, AI-enabled firms attract 83% more capital per round than non-AI peers.</p>

      <p>The lesson is clear: investors fund what they can measure. Without accessible, real-time national health data, African economies remain invisible to global capital.</p>

      <h2>Policy as a Catalyst — Not a Constraint</h2>
      <p>Asia's progress wasn't accidental. It was policy-enabled. Governments acted as catalysts, not gatekeepers:</p>
      <ul>
        <li>Regulatory sandboxes for health AI in China</li>
        <li>Public-private partnerships under India's Digital Health Expo (200+ companies)</li>
        <li>National frameworks enabling cross-border data interoperability</li>
      </ul>

      <p>By contrast, Africa's data ecosystem remains fragmented and donor-dependent, with most health information trapped in surveys, PDFs, and offline registries.</p>

      <p>To compete, African governments must design digital-first policies that unlock data entrepreneurship, not just enforce compliance.</p>

      <h2>The Call to Africa's Decision-Makers</h2>
      <p>Africa bears 25% of the world's disease burden but holds less than 2% of its health data infrastructure.</p>

      <p>This gap is both a crisis and a $1 trillion opportunity.</p>

      <p>Imagine if every African country unified its hospital, insurance, and pharmaceutical data into trusted national platforms. That's precisely what Kapsule is building with the Kapsule Terminal — a data infrastructure that democratizes access to high-quality African health data, enabling analytics, innovation, and investment.</p>

      <p>Such systems could transform aid-dependent healthcare into self-sustaining, data-driven economies.</p>

      <h2>The Road Ahead</h2>
      <p>Asia is already building the healthcare infrastructure of the next century — powered by AI, scaled by data, and financed by private capital.</p>

      <p>The question for Africa is no longer if we can, but when we will act.</p>

      <p>Will Africa lead the next trillion-dollar healthcare revolution — or once again watch from the sidelines?</p>

      <p>The window for action is open now. But it won't stay open forever.</p>

      <h3>About the JIDI Institute for AI and Data Science Research (JIDI-Ghana)</h3>
      <p>The JIDI Institute is a nonprofit innovation think-tank based in Accra, Ghana, dedicated to advancing responsible AI governance, data science education, and ethical digital innovation across Africa. Through research, policy engagement, and leadership development, the Institute equips organizations to navigate the intersection of technology, ethics, and human progress.</p>
    `,
    relatedArticles: ['ai-policy-framework-africa', 'waids-bootcamp-graduates']
  }
};

const relatedArticleTitles: { [key: string]: string } = {
  'ai-policy-framework-africa': 'New AI Policy Framework for Africa Released',
  'waids-bootcamp-graduates': 'WAIDS Bootcamp Graduates 50 Women',
  'university-partnerships-announced': 'New University Partnerships Announced'
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Header />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/#news" className="text-emerald-400 hover:text-emerald-300 underline">
            Back to Articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryColors = {
    emerald: 'text-emerald-400 bg-emerald-400/10',
    blue: 'text-blue-400 bg-blue-400/10',
    purple: 'text-purple-400 bg-purple-400/10'
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/#news" className="text-emerald-400 hover:text-emerald-300 text-sm">
              ← Back to Articles
            </Link>
          </div>

          {/* Category and Date */}
          <div className="flex items-center space-x-3 mb-6">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[article.categoryColor as keyof typeof categoryColors]}`}>
              {article.category}
            </span>
            <span className="text-sm text-gray-400">{article.date}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-lg">
                {article.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-white font-medium">{article.author}</p>
              <p className="text-gray-400 text-sm">{article.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article className="space-y-6 text-gray-300">
            <div dangerouslySetInnerHTML={{ __html: article.content }} className="
              [&>p]:text-gray-300 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
              [&>h2]:text-white [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6
              [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
              [&>ul]:text-gray-300 [&>ul]:my-6 [&>ul]:ml-6 [&>ul]:list-disc
              [&>ul>li]:my-2 [&>ul>li]:text-gray-300 [&>ul>li]:leading-relaxed
              [&>strong]:text-white [&>strong]:font-semibold
            " />
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.relatedArticles.map((relatedSlug) => {
              const related = articles[relatedSlug as keyof typeof articles];
              return (
                <Link 
                  key={relatedSlug}
                  href={`/articles/${relatedSlug}`}
                  className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[related.categoryColor as keyof typeof categoryColors]}`}>
                      {related.category}
                    </span>
                    <span className="text-xs text-gray-400">{related.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{related.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

