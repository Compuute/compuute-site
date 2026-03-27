export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Compuute<span className="text-emerald-400">.</span>
          </span>
          <a
            href="mailto:daniel@compuute.se"
            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Stockholm, Sweden
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Agentic AI Security
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          We secure the AI agent layer. MCP server audits, vulnerability
          assessments, and compliance mapping for organizations deploying AI
          agents in regulated industries.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:daniel@compuute.se"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Book a Security Assessment
          </a>
          <a
            href="https://github.com/Compuute/compuute-scan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            View Scanner on GitHub
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Services
          </h2>
          <p className="mt-2 text-center text-3xl font-bold tracking-tight">
            What we secure
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <ServiceCard
              title="MCP Server Audits"
              description="Static and manual code review of MCP server implementations. 28 rules across 5 VIGIL security layers, mapped to OWASP LLM Top 10."
              icon="🔍"
            />
            <ServiceCard
              title="NIS2 & DORA Compliance"
              description="Gap analysis and remediation guidance for EU regulatory frameworks. Practical controls mapped to your AI agent architecture."
              icon="📋"
            />
            <ServiceCard
              title="AI Agent Security"
              description="End-to-end security assessments for agentic AI systems. Prompt injection testing, tool poisoning analysis, supply chain review."
              icon="🛡️"
            />
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Open Source
          </h2>
          <p className="mt-2 text-center text-3xl font-bold tracking-tight">
            compuute-scan
          </p>
          <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
            Static security scanner for MCP servers. Zero dependencies. OWASP
            LLM Top 10 + NIS2 mapped.
          </p>

          <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="font-mono text-sm text-zinc-300">
              <p className="text-zinc-500">
                # Scan any MCP server in one command
              </p>
              <p className="mt-1">
                <span className="text-emerald-400">$</span> npx compuute-scan
                ./your-mcp-server
              </p>
              <div className="mt-4 border-t border-zinc-800 pt-4">
                <p className="text-zinc-500"># Docker-isolated scanning</p>
                <p className="mt-1">
                  <span className="text-emerald-400">$</span> ./scan.sh clone
                  https://github.com/org/server.git
                </p>
                <p>
                  <span className="text-emerald-400">$</span> ./scan.sh run
                  server --output audit.md
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Rules" value="28" />
              <Stat label="VIGIL Layers" value="5" />
              <Stat label="Dependencies" value="0" />
              <Stat label="Output Formats" value="3" />
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com/Compuute/compuute-scan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-4 text-zinc-400">
            Need a security assessment for your MCP servers or AI agent
            infrastructure? We work with Nordic and EU enterprises on NIS2 and
            DORA compliance.
          </p>
          <a
            href="mailto:daniel@compuute.se"
            className="mt-8 inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            daniel@compuute.se
          </a>
          <p className="mt-6 text-sm text-zinc-500">
            Compuute AB · Stockholm, Sweden
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-zinc-500">
            &copy; 2026 Compuute AB. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/Compuute"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/company/compuute"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-700">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
