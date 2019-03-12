import * as React from "react";
import "./Results.css";
import ResultsHeader from "./ResultsHeader";
import ResultsList from "./ResultsList";
import rickFace from "./rick-face.png";

interface IResult {
    id: number;
    name: string;
    status: string;
    species: string;
    origin: object;
    location: object;
    image: string;
    episode: string[];
    url: string;
};

interface IResultsProps {
    info: object;
    results: IResult[];
    resource: string;
    searched: boolean;
    loading: boolean;
};

const Results: React.SFC<IResultsProps> = ({ info, results = [], resource, searched, loading }) => (
    searched ?
        <div className="results-container">
            {
                !loading ?
                <div>
                    {
                        results.length > 0 ?
                            [<ResultsHeader key="result-header" resource={resource} />,
                            <ResultsList key="result-list" resource={resource} results={results} />]
                            :
                            <div style={{ width: `100%`, textAlign: `center` }}>
                                <h1>Sorry, looks like there are no results!</h1>
                            </div>
                    }
                </div>
                :
                <div>
                    <img src={rickFace} className="app-logo" alt="logo" />
                </div>
            }
        </div>
        :
        null
);

export default Results;