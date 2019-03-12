import * as React from "react";

interface IResultsHeaderProps {
    resource: string;
};

const resourceProperties = {
    character: ["Image", "Name", "Status", "Species"],
    episode: ["Name", "Air Date", "Code"],
    location: ["Name", "Type", "Dimension"]
};

const ResultsHeader: React.SFC<IResultsHeaderProps> = ({ resource }) => (
    <div key="results-header" className="results-header">
        {
            resourceProperties[`${resource}`].map((headerTitle: string) => (
                <div key={`${resource}-${headerTitle}`}>{headerTitle}</div>
            ))
        }
    </div>
);

export default ResultsHeader;