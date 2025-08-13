// Types
interface CourseFeature {
    id: number;
    text: string;
    isIncluded: boolean;
}

interface CourseData {
    id: number;
    title: string;
    startDate: string;
    description: string;
    duration: number;
    durationType: string;
    features: CourseFeature[];
}   