import { Card } from 'components/card';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Arbitrage Bots & AI Agent Frameworks Research Guide'
};

const intro = `
A curated guide to the top open-source arbitrage bots, libraries, and AI multi-agent frameworks on GitHub — 
covering crypto exchanges, DeFi/DEX, sports betting, statistical arbitrage, and autonomous AI agent systems 
(including OpenClaw and Claude-based multi-agent platforms). Sorted by GitHub stars and community adoption to 
help you find the best projects to research.
`;

const cryptoExchangeIntro = `
### Crypto Exchange Arbitrage

These projects help identify and exploit price differences for the same asset across different centralized 
exchanges (CEX-to-CEX arbitrage) or use triangular arbitrage within a single exchange.
`;

const defiIntro = `
### DeFi & DEX Arbitrage

On-chain arbitrage bots that operate across decentralized exchanges, often using flash loans to execute 
trades with zero upfront capital. These include MEV (Maximal Extractable Value) strategies.
`;

const sportsIntro = `
### Sports Betting Arbitrage

Bots that scan odds across multiple sportsbooks or prediction markets to find guaranteed-profit 
arbitrage opportunities where all outcomes can be covered at a net gain.
`;

const statisticalIntro = `
### Statistical & Traditional Market Arbitrage

Tools for pairs trading and statistical arbitrage strategies in stock and commodity markets, 
using cointegration analysis and mean-reversion signals.
`;

const agentFrameworksIntro = `
### AI Multi-Agent Frameworks

Autonomous AI agent frameworks that can coordinate multiple specialized agents. These can be applied to 
trading/arbitrage or any complex multi-step task. Includes OpenClaw, Claude-based multi-agent systems, 
and general-purpose agent orchestration platforms.
`;

const openClawIntro = `
### OpenClaw & Claude Multi-Agent Ecosystem

OpenClaw is an emerging open-source ecosystem for building AI agents powered by Claude and other LLMs. 
These projects provide agent orchestration, memory systems, and multi-agent coordination — useful for 
building sophisticated trading systems or any autonomous workflow.
`;

const disclaimer = `
**Disclaimer:** This page is for educational and research purposes only. Arbitrage trading carries 
financial risk. Always do your own due diligence before using any trading software. Many repositories 
in this space may be unmaintained or experimental — review the code, check recent activity, and 
understand the risks before running any bot with real funds.
`;

const cryptoExchangeBots = [
    {
        name: 'ccxt',
        fullName: 'ccxt/ccxt',
        url: 'https://github.com/ccxt/ccxt',
        stars: '41k+',
        language: 'Python / JS / TS / PHP / C#',
        description:
            'The most widely-used cryptocurrency trading library, supporting 100+ exchanges with a unified API. Not a bot itself, but the foundation most arbitrage bots are built on. Provides real-time market data, order execution, and portfolio management across exchanges.',
        highlights: ['100+ exchange integrations', 'Unified API across languages', 'Active maintenance & large community']
    },
    {
        name: 'Hummingbot',
        fullName: 'hummingbot/hummingbot',
        url: 'https://github.com/hummingbot/hummingbot',
        stars: '17.7k+',
        language: 'Python',
        description:
            'Professional-grade open-source software for building and deploying high-frequency crypto trading bots. Includes built-in arbitrage strategies (cross-exchange market making, AMM arbitrage), backtesting, and paper trading. Supports both CEX and DEX.',
        highlights: [
            'Built-in arbitrage strategies',
            'Backtesting & paper trading',
            'Docker deployment',
            'CEX + DEX support'
        ]
    },
    {
        name: 'Binance Trader',
        fullName: 'yasinkuyu/binance-trader',
        url: 'https://github.com/yasinkuyu/binance-trader',
        stars: '2.7k+',
        language: 'Python',
        description:
            'An experimental cryptocurrency trading bot for Binance that supports arbitrage strategies. Lightweight and focused on a single exchange, making it a good starting point for research.',
        highlights: ['Binance-focused', 'Simple codebase', 'Good for learning']
    },
    {
        name: 'Crypto Trading Bots (Beginner to Advanced)',
        fullName: 'Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance',
        url: 'https://github.com/Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance',
        stars: '1.4k+',
        language: 'Python',
        description:
            'A collection of crypto trading bots including triangular arbitrage implementations. Excellent educational resource with beginner and advanced examples using Python and the Binance API.',
        highlights: ['Triangular arbitrage examples', 'Beginner-friendly', 'Educational focus']
    },
    {
        name: 'crypto-arbitrage',
        fullName: 'kelvinau/crypto-arbitrage',
        url: 'https://github.com/kelvinau/crypto-arbitrage',
        stars: '840+',
        language: 'Python',
        description:
            'Automatic cryptocurrency trading bot using triangular or exchange arbitrage. Supports multiple exchanges and provides a clean implementation of classic arbitrage algorithms.',
        highlights: ['Triangular & exchange arbitrage', 'Multi-exchange support', 'Clean algorithm implementation']
    },
    {
        name: 'Botvana',
        fullName: 'featherenvy/botvana',
        url: 'https://github.com/featherenvy/botvana',
        stars: '247+',
        language: 'Rust',
        description:
            'High-performance, event-driven trading system built in Rust. Designed for low-latency arbitrage and market making with a focus on speed and reliability.',
        highlights: ['Rust for maximum performance', 'Event-driven architecture', 'Low-latency design']
    },
    {
        name: 'KuCoin Arbitrage',
        fullName: 'kanekoshoyu/kucoin_arbitrage',
        url: 'https://github.com/kanekoshoyu/kucoin_arbitrage',
        stars: '154+',
        language: 'Rust',
        description:
            'Event-driven async cyclic arbitrage bot for KuCoin, built in Rust. Demonstrates how to implement triangular arbitrage with modern async patterns for high throughput.',
        highlights: ['Cyclic/triangular arbitrage', 'Async Rust', 'Event-driven']
    }
];

const defiBots = [
    {
        name: 'Aave Flash Loan Arbitrage',
        fullName: 'johngrantuk/aaveFlashLoan',
        url: 'https://github.com/johngrantuk/aaveFlashLoan',
        stars: '745+',
        language: 'JavaScript / Solidity',
        description:
            'Award-winning (1st place, Gitcoin Aave Hackathon) flash loan arbitrage bot. Uses Aave flash loans as capital to arbitrage between Uniswap exchanges. Well-documented with a detailed write-up from the Aave team.',
        highlights: ['Hackathon winner', 'Aave flash loans', 'Well-documented']
    },
    {
        name: 'DEX-Arbitrage',
        fullName: 'jamesbachini/DEX-Arbitrage',
        url: 'https://github.com/jamesbachini/DEX-Arbitrage',
        stars: '686+',
        language: 'Solidity',
        description:
            'Example arbitrage trading bot for decentralized exchanges. Clean Solidity implementation that demonstrates the core concepts of on-chain DEX arbitrage.',
        highlights: ['Clean Solidity code', 'Educational example', 'DEX-focused']
    },
    {
        name: 'degenbot',
        fullName: 'BowTiedDevil/degenbot',
        url: 'https://github.com/BowTiedDevil/degenbot',
        stars: '531+',
        language: 'Python / Solidity',
        description:
            'Python classes for rapid development of Uniswap V2, V3, V4, Curve V1, and Solidly V2 arbitrage bots on EVM-compatible blockchains. A comprehensive toolkit for DeFi arbitrage development.',
        highlights: ['Multi-DEX support (Uniswap, Curve, Solidly)', 'Python toolkit', 'EVM-compatible']
    },
    {
        name: 'Flashswap Arbitrage (Avalanche)',
        fullName: 'cjthoma1/flashswap-arbitrage-avalanche',
        url: 'https://github.com/cjthoma1/flashswap-arbitrage-avalanche',
        stars: '140+',
        language: 'TypeScript / Solidity',
        description:
            'Crypto arbitrage bot for the Avalanche blockchain. Searches multiple token exchanges for price differences and executes flash swaps. Built with Hardhat and demonstrates cross-DEX flash loan strategies.',
        highlights: ['Avalanche C-Chain', 'Flash swap execution', 'Hardhat framework']
    },
    {
        name: 'OsEngine',
        fullName: 'AlexWan/OsEngine',
        url: 'https://github.com/AlexWan/OsEngine',
        stars: '959+',
        language: 'C#',
        description:
            'Open-source algo trading platform supporting arbitrage, market making, and various trading strategies. Includes a GUI, backtesting, and connections to both crypto and traditional markets.',
        highlights: ['Full trading platform', 'GUI included', 'Crypto + traditional markets']
    }
];

const sportsBots = [
    {
        name: 'Live Sports Arbitrage Bet Finder',
        fullName: 'personal-coding/Live-Sports-Arbitrage-Bet-Finder',
        url: 'https://github.com/personal-coding/Live-Sports-Arbitrage-Bet-Finder',
        stars: '273+',
        language: 'Python',
        description:
            'Automated bot that identifies live sports arbitrage opportunities across FanDuel, DraftKings, and William Hill (Caesars). The most popular open-source sports arbitrage project on GitHub.',
        highlights: ['Live odds scanning', 'FanDuel, DraftKings, Caesars', 'Automated opportunity detection']
    },
    {
        name: 'Allusion',
        fullName: 'erdieee/allusion',
        url: 'https://github.com/erdieee/allusion',
        stars: '21+',
        language: 'Python',
        description:
            'Sports betting arbitrage bot that scans odds across multiple bookmakers. Smaller but focused project for sports arbitrage research.',
        highlights: ['Multi-bookmaker scanning', 'Sports-focused', 'Python implementation']
    }
];

const statisticalBots = [
    {
        name: 'Hummingbot (AMM Arbitrage)',
        fullName: 'hummingbot/hummingbot',
        url: 'https://github.com/hummingbot/hummingbot',
        stars: '17.7k+',
        language: 'Python',
        description:
            'Also listed above, Hummingbot includes AMM arbitrage and cross-exchange strategies that apply statistical methods. Its backtesting engine allows strategy validation before live deployment.',
        highlights: ['Statistical backtesting', 'AMM arbitrage', 'Strategy validation']
    },
    {
        name: 'StatArbX',
        fullName: 'sukanyaghosh74/StatArbX',
        url: 'https://github.com/sukanyaghosh74/StatArbX',
        stars: '3+',
        language: 'Python',
        description:
            'A comprehensive statistical arbitrage (pairs trading) bot. Downloads stock data from Yahoo Finance, finds cointegrated pairs via the Engle-Granger test, trades the spread using z-score rules, and backtests with Backtrader.',
        highlights: ['Pairs trading', 'Cointegration analysis', 'Backtrader integration']
    }
];

const agentFrameworks = [
    {
        name: 'AgentGPT',
        fullName: 'reworkd/AgentGPT',
        url: 'https://github.com/reworkd/AgentGPT',
        stars: '35.8k+',
        language: 'TypeScript',
        description:
            'Assemble, configure, and deploy autonomous AI agents in your browser. One of the most popular autonomous agent frameworks. Agents can be tasked with complex multi-step goals including market research, data analysis, and automated workflows.',
        highlights: ['Browser-based', 'Goal-driven autonomy', 'No-code agent creation']
    },
    {
        name: 'SuperAGI',
        fullName: 'TransformerOptimus/SuperAGI',
        url: 'https://github.com/TransformerOptimus/SuperAGI',
        stars: '17.2k+',
        language: 'Python',
        description:
            'A dev-first open-source autonomous AI agent framework. Enables building, managing, and running useful autonomous agents quickly and reliably. Includes tools for agent scheduling, memory, and multi-model support.',
        highlights: ['Dev-first design', 'Agent marketplace', 'Multi-model support', 'GUI + API']
    },
    {
        name: 'Swarms',
        fullName: 'kyegomez/swarms',
        url: 'https://github.com/kyegomez/swarms',
        stars: '5.9k+',
        language: 'Python',
        description:
            'Enterprise-grade production-ready multi-agent orchestration framework. Coordinate swarms of AI agents for complex tasks. Used by The Swarm Corporation for trading bots including crypto fund automation, forex analysis, and market monitoring.',
        highlights: ['Enterprise-grade', 'Agent swarm orchestration', 'Trading-focused use cases', 'Rust version available']
    },
    {
        name: 'agentUniverse',
        fullName: 'agentuniverse-ai/agentUniverse',
        url: 'https://github.com/agentuniverse-ai/agentUniverse',
        stars: '2.1k+',
        language: 'Python',
        description:
            'An LLM multi-agent framework that allows developers to easily build multi-agent applications. Provides patterns for agent collaboration, debate, and consensus-building that can be applied to trading analysis.',
        highlights: ['Easy multi-agent setup', 'Collaboration patterns', 'LLM-agnostic']
    },
    {
        name: 'CrewAI Studio',
        fullName: 'strnad/CrewAI-Studio',
        url: 'https://github.com/strnad/CrewAI-Studio',
        stars: '1.2k+',
        language: 'Python',
        description:
            'A user-friendly, multi-platform GUI for managing and running CrewAI agents and tasks. CrewAI lets you define role-specific AI agents that collaborate — ideal for building research crews that analyze arbitrage opportunities.',
        highlights: ['GUI for agent management', 'Role-specific agents', 'No coding needed', 'CrewAI ecosystem']
    },
    {
        name: 'Claude Code Workflow',
        fullName: 'catlog22/Claude-Code-Workflow',
        url: 'https://github.com/catlog22/Claude-Code-Workflow',
        stars: '1.4k+',
        language: 'TypeScript',
        description:
            'JSON-driven multi-agent development framework with intelligent CLI orchestration. Supports Gemini, Qwen, and Codex alongside Claude. Context-first architecture for automated workflow execution.',
        highlights: ['JSON-driven workflows', 'Multi-LLM support', 'CLI orchestration', 'Context-first']
    }
];

const openClawBots = [
    {
        name: 'OpenClaw-RL',
        fullName: 'Gen-Verse/OpenClaw-RL',
        url: 'https://github.com/Gen-Verse/OpenClaw-RL',
        stars: '3.2k+',
        language: 'TypeScript',
        description:
            'Train any agent simply by talking. OpenClaw-RL uses reinforcement learning from human feedback (RLHF) and on-policy distillation to create skilled autonomous agents. Supports GUI applications, coding tasks, and complex multi-step workflows.',
        highlights: ['RLHF training', 'Skill learning', 'Natural language agent training', 'Memory systems']
    },
    {
        name: 'OpenAkita (OpenClaw ecosystem)',
        fullName: 'openakita/openakita',
        url: 'https://github.com/openakita/openakita',
        stars: '1.2k+',
        language: 'Python',
        description:
            'An open-source AI assistant framework with skills and agent architecture. Part of the broader OpenClaw ecosystem, providing the foundation for building autonomous agents with persistent capabilities.',
        highlights: ['Skills architecture', 'Agent framework', 'OpenClaw compatible', 'Python-based']
    },
    {
        name: 'Loki Mode',
        fullName: 'asklokesh/loki-mode',
        url: 'https://github.com/asklokesh/loki-mode',
        stars: '733+',
        language: 'Python',
        description:
            'Multi-agent provider-agnostic autonomous system and framework. Supports Claude, Gemini, and OpenAI Codex. Includes CI/CD integration, automated code review, and DevOps capabilities that can be extended to trading workflows.',
        highlights: ['Provider-agnostic', 'CI/CD integration', 'Multi-agent autonomy', 'Claude + Gemini + Codex']
    },
    {
        name: 'OpenClaw Bot Review Dashboard',
        fullName: 'xmanrui/OpenClaw-bot-review',
        url: 'https://github.com/xmanrui/OpenClaw-bot-review',
        stars: '727+',
        language: 'TypeScript',
        description:
            'A lightweight web dashboard for viewing all your OpenClaw bots, agents, models, and sessions at a glance. Essential for monitoring multiple agents running simultaneously — useful for managing trading agent fleets.',
        highlights: ['Agent monitoring dashboard', 'Session management', 'Multi-bot overview', 'Web UI']
    },
    {
        name: 'Clawport UI',
        fullName: 'JohnRiceML/clawport-ui',
        url: 'https://github.com/JohnRiceML/clawport-ui',
        stars: '541+',
        language: 'TypeScript',
        description:
            'Open-source AI agent command center for Claude Code agent teams. Built on the OpenClaw ecosystem, providing a centralized interface for orchestrating multiple AI agents working in parallel.',
        highlights: ['Agent command center', 'Team orchestration', 'Claude Code integration', 'Parallel agents']
    },
    {
        name: 'claude-flows',
        fullName: 'xyzthiago/claude-flows',
        url: 'https://github.com/xyzthiago/claude-flows',
        stars: '122+',
        language: 'Shell',
        description:
            'Agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features distributed swarm intelligence and RAG integration.',
        highlights: ['Swarm intelligence', 'RAG integration', 'MCP protocol', 'Distributed agents']
    },
    {
        name: 'ClawSwarm',
        fullName: 'The-Swarm-Corporation/ClawSwarm',
        url: 'https://github.com/The-Swarm-Corporation/ClawSwarm',
        stars: '78+',
        language: 'Python',
        description:
            'A lighter-weight version of OpenClaw — natively multi-agent, compiles to Rust, and built on the Swarms framework. Provides a unified messaging API across Telegram, Discord, and WhatsApp with optional Claude-powered reasoning.',
        highlights: ['Lightweight OpenClaw', 'Rust compilation', 'Multi-platform messaging', 'Swarms integration']
    }
];

function BotCard({ bot }) {
    return (
        <Card className="h-full">
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <a
                        href={bot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-neutral-900 hover:underline"
                    >
                        {bot.name}
                    </a>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-sm font-medium text-amber-800">
                        ⭐ {bot.stars}
                    </span>
                </div>
                <p className="text-sm text-neutral-500">
                    <span className="font-mono">{bot.fullName}</span> · {bot.language}
                </p>
                <p>{bot.description}</p>
                {bot.highlights && (
                    <ul className="flex flex-wrap gap-2">
                        {bot.highlights.map((h, i) => (
                            <li
                                key={i}
                                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                            >
                                {h}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Card>
    );
}

function BotGrid({ bots }) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {bots.map((bot) => (
                <BotCard key={bot.fullName} bot={bot} />
            ))}
        </div>
    );
}

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4">Arbitrage Bots & AI Agent Frameworks</h1>
                <Markdown content={intro} className="mb-6" />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={cryptoExchangeIntro} />
                <BotGrid bots={cryptoExchangeBots} />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={defiIntro} />
                <BotGrid bots={defiBots} />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={sportsIntro} />
                <BotGrid bots={sportsBots} />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={statisticalIntro} />
                <BotGrid bots={statisticalBots} />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={agentFrameworksIntro} />
                <BotGrid bots={agentFrameworks} />
            </section>

            <section className="flex flex-col gap-6">
                <Markdown content={openClawIntro} />
                <BotGrid bots={openClawBots} />
            </section>

            <section>
                <Card>
                    <Markdown content={disclaimer} />
                </Card>
            </section>
        </div>
    );
}
