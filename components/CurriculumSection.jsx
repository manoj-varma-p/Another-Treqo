export default function CurriculumSection() {
  return (
    <section className="curriculum wrap" id="curriculum" data-stage="LEARN">
      <div className="sec-head">
        <p className="label reveal">The curriculum</p>
        <h2 className="reveal reveal-d1">What you&apos;ll learn inside the system</h2>
        <p className="deck reveal reveal-d2">
          Eight milestones, in the order you&apos;ll hit them — built around how marketing actually gets done inside a growing company.
        </p>
      </div>

      <div className="path reveal" id="currPath">
        <div className="path-spine"><i id="pathFill"></i></div>

        <div className="step">
          <div className="step-node">01</div>
          <div className="step-body">
            <p className="step-phase">Foundation</p>
            <h3 className="step-title">Business &amp; Market Fundamentals</h3>
            <p>Before you touch a single tool, you learn to read a business: unit economics, market sizing, competitive positioning, and how a company actually makes money.</p>
            <div className="step-tags">
              <span>Unit Economics</span><span>Market Sizing</span><span>Positioning</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">02</div>
          <div className="step-body">
            <p className="step-phase">Foundation</p>
            <h3 className="step-title">Brand &amp; Content Strategy</h3>
            <p>Build a brand voice from scratch, write content that converts, and design a content system that runs without you babysitting it every day.</p>
            <div className="step-tags">
              <span>Brand Voice</span><span>Copywriting</span><span>Content Systems</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">03</div>
          <div className="step-body">
            <p className="step-phase">Channels</p>
            <h3 className="step-title">Performance Marketing</h3>
            <p>Run real budgets across Meta and Google. Learn targeting, bidding, creative testing, and how to read a dashboard without lying to yourself about the numbers.</p>
            <div className="step-tags">
              <span>Meta Ads</span><span>Google Ads</span><span>A/B Testing</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">04</div>
          <div className="step-body">
            <p className="step-phase">Channels</p>
            <h3 className="step-title">SEO &amp; Organic Growth</h3>
            <p>Technical SEO, keyword strategy, and content that compounds — the channels that keep working long after the ad budget runs out.</p>
            <div className="step-tags">
              <span>Technical SEO</span><span>Keyword Strategy</span><span>Link Building</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">05</div>
          <div className="step-body">
            <p className="step-phase">Growth</p>
            <h3 className="step-title">Growth &amp; Funnel Design</h3>
            <p>Map the funnel from first touch to retained customer. Design growth loops, fix leaks, and prioritise what actually moves revenue.</p>
            <div className="step-tags">
              <span>Funnels</span><span>Growth Loops</span><span>CRO</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">06</div>
          <div className="step-body">
            <p className="step-phase">Growth</p>
            <h3 className="step-title">Analytics &amp; Marketing Math</h3>
            <p>CAC, LTV, churn, payback period — the numbers that decide whether a campaign is working or just feels like it&apos;s working.</p>
            <div className="step-tags">
              <span>GA4</span><span>Dashboards</span><span>Attribution</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">07</div>
          <div className="step-body">
            <p className="step-phase">Leverage</p>
            <h3 className="step-title">AI-Native Marketing</h3>
            <p>Use AI tools for research, creative production, and campaign analysis — built into the workflow from week one, not bolted on at the end.</p>
            <div className="step-tags">
              <span>AI Research</span><span>Creative Ops</span><span>Automation</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-node">08</div>
          <div className="step-body">
            <p className="step-phase">Leverage</p>
            <h3 className="step-title">Sales, Pitching &amp; Client Handling</h3>
            <p>Pitch an idea, present to a client, and hold a room. The soft skills that decide whether your strategy ever leaves the deck.</p>
            <div className="step-tags">
              <span>Pitching</span><span>Client Comms</span><span>Presentation</span>
            </div>
          </div>
        </div>

        <div className="step-end">
          <div className="step-node">★</div>
          <div className="step-end-body">
            <strong>Capstone — TREQO Certified</strong>
            <span>A real campaign, built and launched, with real numbers attached.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
