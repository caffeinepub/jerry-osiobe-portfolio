import { FileText, ExternalLink } from 'lucide-react';

const papers = [
  {
    title: 'Expert Systems in CCTV and Access Control Management',
    doi: '10.13140/RG.2.2.20538.86725',
  },
  {
    title: 'Introduction to CCTV Surveillance Systems and Applications',
    doi: '10.13140/RG.2.2.18049.31848',
  },
  {
    title: 'Business Continuity Plan using NIST SP 800-34 Rev. 1 Framework',
    doi: '10.13140/RG.2.2.32324.28804',
  },
  {
    title: 'Environmental Impact Assessment App using Prolog Reasoning',
    doi: '10.13140/RG.2.2.21890.95688',
  },
  {
    title: 'Unification of Real Differential, Real Difference and Modular Sequential Systems',
    doi: '10.13140/RG.2.2.23568.67847',
  },
];

export default function ResearchPapers() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Research Papers / Publications
        </h2>
        <div className="space-y-4 sm:space-y-5">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-md border border-border hover:shadow-lg hover:border-teal-500/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                    {paper.title}
                  </h3>
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium group/link"
                  >
                    <span>DOI: {paper.doi}</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
