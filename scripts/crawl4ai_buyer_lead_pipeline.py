#!/usr/bin/env python3
"""
Crawl4AI & Browser-Use Automated Buyer Lead Generation Pipeline
Target: Scrape, filter, and draft customized B2B OEM outreach for North American & European indie beauty brands.
"""

import os
import sys
import json
import re
from datetime import datetime

# Beautychain / MLM Lip Value Proposition Hooks
PITCH_HOOKS = {
    "moq": "500 pcs universal MOQ per SKU",
    "speed": "7-day rapid lab sampling (100% credited on production)",
    "compliance": "US FDA MoCRA Registered & EU Microplastic-Free (Reg 2023/2055)",
    "tooling": "In-house custom component library & bespoke mold opening"
}

def clean_contact_info(html_or_text):
    emails = list(set(re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', html_or_text)))
    phones = list(set(re.findall(r'\+?[0-9]{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}', html_or_text)))
    # Exclude common false positives
    emails = [e for e in emails if not any(x in e.lower() for x in ['.png', '.jpg', 'wixpress', 'sentry', 'example.com'])]
    return emails, phones

def score_buyer_lead(brand_name, product_keywords, market_region="US"):
    """
    JEV-style lead qualification scoring (0-100)
    """
    score = 50 # Base score for cosmetics brand
    reasons = []
    
    lip_kw = ["lip", "gloss", "lipstick", "lip oil", "lip tint", "lip mud"]
    matched = [kw for kw in lip_kw if kw in product_keywords.lower()]
    
    if matched:
        score += 30
        reasons.append(f"Direct category match: {', '.join(matched)}")
    
    if market_region.upper() in ["US", "EU", "UK", "EUROPE"]:
        score += 20
        reasons.append(f"Target compliance market: {market_region.upper()}")
        
    return {
        "brand": brand_name,
        "score": score,
        "tier": "Tier-1 High Intent" if score >= 80 else "Tier-2 Monitor",
        "reasons": reasons
    }

def generate_cold_outreach_email(brand_name, contact_name, matched_category):
    subject = f"Custom {matched_category} contract manufacturing for {brand_name} (500 MOQ · 7-Day Samples)"
    body = f"""Hi {contact_name or 'there'},

I came across {brand_name}'s recent launches in the {matched_category} space. Given recent EU Microplastics restrictions (Reg 2023/2055) and US FDA MoCRA facility requirements, I wanted to introduce our specialized lip formulation atelier.

We are Beautychain Limited (mlmlip.com) — a direct GMPC/ISO 22716 lip cosmetics manufacturer with dual R&D and automated cleanroom facilities.

How we solve the traditional contract manufacturing bottlenecks for growing brands:
1. Universal 500-unit MOQ: Test seasonal shades and textures with zero dead-stock risk.
2. 7-Day Lab Sampling: Benchmark-matching prototypes dispatched in 7 business days, with 100% of sample fees credited back to your order.
3. Turn-Key Compliance: Active US FDA MoCRA registration, EU CPNP dossiers, and certified microplastic-free glitter & pigment bases.
4. Packaging Library: Access in-house magnetic zamac lipstick cases, heavyweight acrylic vials, and custom mold tooling.

Could we send your team a complimentary customized sample kit tailored to {brand_name}'s aesthetic?

Best regards,

Nancy Bo
Global Accounts Director | Beautychain Limited (mlmlip.com)
WhatsApp: +86 136 5238 0291 | nancy@mlmlip.com
"""
    return {"subject": subject, "body": body}

def main():
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Crawl4AI B2B Lead Generator initialized.")
    # Demonstration pipeline execution
    sample_targets = [
        {"brand": "Aurora Glow Beauty", "region": "US", "products": "Peptide lip oil, plumping gloss", "contact": "Founder"},
        {"brand": "Luxe Velvet Cosmetics", "region": "UK", "products": "Matte lip mud, precision liners", "contact": "Product Manager"}
    ]
    
    results = []
    for target in sample_targets:
        qualification = score_buyer_lead(target["brand"], target["products"], target["region"])
        email_draft = generate_cold_outreach_email(target["brand"], target["contact"], "Lip Collection")
        results.append({
            "lead": qualification,
            "draft_email": email_draft
        })
        print(f"  ✓ Processed {target['brand']}: Score {qualification['score']} ({qualification['tier']})")

    out_file = "/Volumes/glitter/Glitter-Workspace/sites/mlmlip/data/sample_outreach_pipeline.json"
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"🎉 Lead pipeline output recorded at: {out_file}")

if __name__ == "__main__":
    main()
