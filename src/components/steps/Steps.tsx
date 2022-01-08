import * as React from 'react';
import {useEffect, useState} from "react";
import {Results} from "./results/Results";
import {Prioritize} from "./prioritize/Prioritize";
import {Preselect} from "./preselect/Preselect";

export type StepsProps = {

};
export const Steps = ({}: StepsProps) => {
    const [coreValues, setCoreValues] = useState<coreValue[]>([]);
    const [prioritizeOptions, setPrioritizeOptions] = useState<
        prioritizeOption[]
        >([]);
    const [step, setStep] = useState(1);
    useEffect(() => {
        setCoreValues(
            coreValuesList.map((coreValue) => ({
                name: coreValue,
                isPreselected: false,
                isSelected: false,
            }))
        );
    }, []);

    useEffect(() => {
        setPrioritizeOptions(getPrioritizeOptions(coreValues.slice(0, 10)));
    }, [coreValues]);

    const onPreselectCoreValue = (name: string) => {
        setCoreValues((coreValues) =>
            coreValues?.map((coreValue) =>
                coreValue.name === name
                    ? { ...coreValue, isPreselected: !coreValue.isPreselected }
                    : coreValue
            )
        );
    };

    const onPrioritizeCoreValue = (selectedOption: prioritizeOption) => {
        setPrioritizeOptions((options) =>
            options?.map((option) =>
                option.first === selectedOption.first &&
                option.second === selectedOption.second
                    ? { ...selectedOption }
                    : option
            )
        );
    };
    return (
        <div>
            {step === 1 && (
                <Preselect
                    coreValues={coreValues}
                    onPreselectCoreValue={onPreselectCoreValue}
                    changeStep={(newStep) => {
                        setStep(newStep);
                    }}
                />
            )}
            {step === 2 && (
                <Prioritize
                    prioritizeOptions={prioritizeOptions}
                    onSelectOption={onPrioritizeCoreValue}
                    changeStep={(newStep) => {
                        setStep(newStep);
                    }}
                />
            )}
            {step === 3 && (
                <Results
                    prioritizeOptions={prioritizeOptions}
                    changeStep={(newStep) => {
                        setStep(newStep);
                    }}
                />
            )}
        </div>
    );
};


export type coreValue = {
    name: string;
    isPreselected: boolean;
    isSelected: boolean;
};
export interface prioritizeOption {
    first: string;
    second: string;
    selected: string | undefined;
}

function getPrioritizeOptions(
    preselectedCoreValues: coreValue[]
): prioritizeOption[] {
    let coreValuesOptions: prioritizeOption[] = [];
    for (let i = 0; i < preselectedCoreValues.length; i += 1) {
        for (let j = i + 1; j < preselectedCoreValues.length; j += 1) {
            coreValuesOptions.push({
                first: preselectedCoreValues[i].name,
                second: preselectedCoreValues[j].name,
                selected: "",
            });
        }
    }
    return coreValuesOptions;
}

const coreValuesList = [
    "Family",
    "Freedom",
    "Security",
    "Loyalty",
    "Intelligence",
    "Connection",
    "Creativity",
    "Humanity",
    "Success",
    "Respect",
    "Invention",
    "Diversity",
    "Generosity",
    "Integrity",
    "Finesse",
    "Love",
    "Openness",
    "Religion",
    "Order",
    "Advancement",
    "Joy/Play",
    "Forgiveness",
    "Work Smarter and Harder",
    "Excitement",
    "Goodness",
    "Involvement",
    "Faith",
    "Wisdom",
    "Beauty",
    "Caring",
    "Personal Development",
    "Honesty",
    "Adventure",
    "Kindness",
    "Teamwork",
    "Career",
    "Communication",
    "Learning",
    "Excellence",
    "Innovation",
    "Quality",
    "Commonality",
    "Contributing",
    "Spiritualism",
    "Strength",
    "Entertain",
    "Wealth",
    "Speed",
    "Power",
    "Affection",
    "Cooperation",
    "Love of Career",
    "Friendship/Relationship",
    "Encouragement",
    "Pride in Your Work",
    "Clarity",
    "Fun-Loving",
    "Charisma",
    "Humor",
    "Leadership",
    "Renewal",
    "Home",
    "Be True",
    "Contentment",
    "Friendship",
    "Courage",
    "Balance",
    "Compassion",
    "Fitness",
    "Professionalism",
    "Relationship",
    "Knowledge",
    "Change",
    "Prosperity",
    "Wellness",
    "Finances",
    "Gratitude",
    "Grace",
    "Endurance",
    "Facilitation",
    "Effectiveness",
    "Fun",
    "Fame",
    "Justice",
    "Appreciation",
    "Willingness",
    "Trusting Your Gut",
    "Giving People a Chance",
    "Patience",
    "Self-Respect",
    "Abundance",
    "Reciprocity",
    "Enjoyment",
    "Entrepreneurial",
    "Happiness",
    "Harmony",
    "Peace",
];
