declare namespace twc {
    type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
    type ClassDictionary = Record<string, any>;
    type ClassArray = ClassValue[];
    function twc(...inputs: ClassValue[]): string;
}

declare function twc(...inputs: twc.ClassValue[]): string;

export = twc;