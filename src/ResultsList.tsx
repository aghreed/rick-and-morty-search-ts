import * as React from "react";

interface IResult {
    id: number;
    name: string;
    status?: string;
    species?: string;
    image?: string;
    air_date?: string;
    code?: string;
    type?: string;
    dimension?: string;
};

interface IResultsListProps {
    results: IResult[];
    resource: string;
}

const resourceKeys = {
    character: ["image", "name", "status", "species"],
    episode: ["name", "air_date", "code"],
    location: ["name", "type", "dimension"]
};

const resultImageStyle = {
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `contain`,
    height: `100px`
};

const ResultsList: React.SFC<IResultsListProps> = ({ results, resource }) => (
    <div key="results" className="results">
        {
            results.map((result) => (
                <div className="result" key={result.id}>
                    {
                        resourceKeys[`${resource}`].map((key: string) => (
                            <div key={`${result.id}-${key}`} style={key === "image" ? { backgroundImage: `url(${result.image})`, ...resultImageStyle } : {}}>
                                {key === "image" ? "" : result[`${key}`]}
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </div>
);

export default ResultsList;