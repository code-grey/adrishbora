const terminalOutput = document.getElementById('terminal-output');
const buttons = document.querySelectorAll('.cmd-btn');

const data = {
    'whoami': `
        <div class="section-title">Adrish Bora</div>
        <div class="item-desc">
            Backend Systems Engineer focused on Go, distributed systems, and low-level Linux programming.<br>
            I build highly concurrent, low-latency infrastructure—from custom container runtimes to production-grade IoT backends handling thousands of devices.<br><br>
            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <a href="mailto:adrishbora@gmail.com" style="color: var(--highlight); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email
                </a>
                <a href="https://linkedin.com/in/adrishbora" target="_blank" style="color: var(--highlight); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                </a>
                <a href="https://github.com/code-grey" target="_blank" style="color: var(--highlight); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                </a>
                <a href="https://twitter.com/code_grey_adr" target="_blank" style="color: var(--highlight); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    Twitter
                </a>
            </div>
        </div>
        <div class="section-title" style="margin-top: 1rem;">Education</div>
        <div class="item-title">Gauhati University Institute of Science and Technology (2023 - 2027)</div>
        <div class="item-meta">B.Tech., Computer Science and Engineering | Guwahati, Assam</div>
    `,
    'cat skills.txt': `
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            <div class="skills-category">Languages:</div>
            <div>Go (Golang), Python, C, C++, SQL, Bash, JavaScript</div>
            
            <div class="skills-category">Backend & Cloud:</div>
            <div>Docker, Gin, gRPC, MQTT, Redis, AWS, Nginx, Solana (Go SDK)</div>
            
            <div class="skills-category">Security & Tools:</div>
            <div>BurpSuite, Wireshark, Nmap, Curl, Postman, Git/GitHub Actions, Linux</div>
            
            <div class="skills-category">Core Concepts:</div>
            <div>Distributed Systems, Monoliths, Microservices, Concurrency, Cryptography, Systems Programming</div>
        </div>
    `,
    'ls projects/': `
        <div class="section-title">Projects</div>
        
        <div class="item-title">Silo (Container Runtime Prototype)</div>
        <div class="item-meta">Go, Linux Systems Programming | Feb 2026</div>
        <div class="item-desc">
            <ul>
                <li>Developing a container runtime from scratch to understand OCI internals.</li>
                <li>Implemented process isolation using Linux Namespaces (UTS, PID, Mount) and Cgroups v2.</li>
                <li>Security Engineering: Wrote custom C exploits to demonstrate chroot breakouts.</li>
            </ul>
        </div>

        <div class="item-title">Project Aether</div>
        <div class="item-meta">Go, EMQX, Docker, Protobuf, TimescaleDB, Redis | Jan 2026</div>
        <div class="item-desc">
            <ul>
                <li>Production-grade IoT backend handling 10k+ concurrent devices (Modular Monolith).</li>
                <li>Engineered double-lock auth (mTLS + tokens) and RBAC with automated JWT rotation.</li>
                <li>Concurrent Go ingestion pipeline processing Protobuf telemetry (60% network reduction).</li>
            </ul>
        </div>

        <div class="item-title">SafeRide</div>
        <div class="item-meta">Go, Python, Redis, Solana, Raspberry Pi Pico | Nov 2025</div>
        <div class="item-desc">
            <ul>
                <li>Edge-to-Chain IoT network using Go and MQTT with Redis for real-time state.</li>
                <li>Low-latency CV pipeline (MediaPipe) calculating Eye Aspect Ratio for fatigue detection.</li>
                <li>Immutable audit trail on Solana Blockchain for automated insurance claims.</li>
            </ul>
        </div>

        <div class="item-title">Threatfeed</div>
        <div class="item-meta">Go, Gin, SQLite, Concurrency | Aug 2025</div>
        <div class="item-desc">
            <ul>
                <li>High-throughput API aggregating data from 30+ sources using Fan-In concurrency.</li>
                <li>Reduced ingestion latency by 80% (10s -> 2s) via Goroutines and buffered channels.</li>
            </ul>
        </div>
    `,
    'cat experience.log': `
        <div class="section-title">Experience</div>
        
        <div class="item-title">Innect Technologies Pvt. Ltd. - Backend Team Lead</div>
        <div class="item-meta">Winter Intern (Remote) | Jan 2026 - Feb 2026</div>
        <div class="item-desc">
            <ul>
                <li>Co-Developed an Event-Driven Modular Monolith (Project Aether) to balance high-throughput ingestion with operational simplicity.</li>
                <li>Orchestrated containerized deployment strategy (Docker Compose, Nginx, Cloudflare Tunnels).</li>
            </ul>
        </div>

        <div class="item-title">Airports Authority of India - Software & Networking</div>
        <div class="item-meta">Summer Intern (On-site) | Jun 2025</div>
        <div class="item-desc">
            <ul>
                <li>Analyzed enterprise-scale IT Asset Management protocols and aviation network infrastructure.</li>
                <li>Monitored high-availability server racks and network switches.</li>
            </ul>
        </div>

        <div class="item-title">CNCF Guwahati - Website Manager & Core Team</div>
        <div class="item-meta">Oct 2024 - Present</div>
        <div class="item-desc">
            <ul>
                <li>Overseeing digital infrastructure and GitHub organization for community readiness.</li>
            </ul>
        </div>
    `,
    'cat oss.patch': `
        <div class="section-title">OSS Contributions</div>
        
        <div class="item-title">Linux Kernel | Contributor (Staging Branch)</div>
        <div class="item-meta">Dec 2025</div>
        <div class="item-desc">
            <ul>
                <li>Refactored staging drivers via checkpatch.pl and git send-email.</li>
                <li>Collaborated with maintainers to ensure strict upstream compliance.</li>
                <li>Commit: <a href="https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging.git/commit/?id=bfb44780ee450553a0e55eaa2239c3bf5062a5bd" target="_blank" style="color: var(--highlight); word-break: break-all;">View Patch</a></li>
            </ul>
        </div>
    `
};

function printOutput(cmd, content) {
    const block = document.createElement('div');
    block.className = 'output-block';
    
    const echo = document.createElement('div');
    echo.className = 'cmd-echo';
    echo.innerHTML = `guest@adrish-sys:~$ ${cmd}`;
    
    const payload = document.createElement('div');
    payload.innerHTML = content;

    block.appendChild(echo);
    block.appendChild(payload);
    
    terminalOutput.appendChild(block);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function init() {
    printOutput('whoami', data['whoami']);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cmd = e.target.getAttribute('data-cmd');
            
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            if (cmd === 'clear') {
                terminalOutput.innerHTML = '';
                buttons.forEach(b => b.classList.remove('active'));
            } else {
                printOutput(cmd, data[cmd]);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
