"use client";
import React, { useState } from "react";

export interface MentorshipFormData {
    title: string;
    videoDescription: string;
    programSummary: string;
    externalLinks: string;
    menteesQuota: number;
    files: File[] | null;
}

interface MentorshipFormProps {
    onSubmit: (formData: MentorshipFormData) => void;
}

const MentorshipForm: React.FC<MentorshipFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [programSummary, setProgramSummary] = useState("");
    const [externalLinks, setExternalLinks] = useState("");
    const [menteesQuota, setMenteesQuota] = useState<number | "">("");
    const [uf, setFiles] = useState<File[] | null>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            title,
            videoDescription,
            programSummary,
            externalLinks,
            menteesQuota: Number(menteesQuota),
            files: uf,
        });
        // Clear form
        setTitle("");
        setVideoDescription("");
        setProgramSummary("");
        setExternalLinks("");
        setMenteesQuota("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <div>
                <label className="block text-sm font-medium">Program Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Video Description</label>
                <textarea
                    value={videoDescription}
                    onChange={(e) => setVideoDescription(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Program Summary</label>
                <textarea
                    value={programSummary}
                    onChange={(e) => setProgramSummary(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium">External Links</label>
                <input
                    type="url"
                    value={externalLinks}
                    onChange={(e) => setExternalLinks(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Mentees Quota</label>
                <input
                    type="number"
                    value={menteesQuota}
                    onChange={(e) => setMenteesQuota(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>
            <button
                type="submit"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
                Submit
            </button>
        </form>
    );
};

export default MentorshipForm;