
// OPTIONS FOR SELECTS IN JOBSEEKER

export const LocationOptions = [
    { value: 'Barcelona', label: 'Barcelona'},
    { value: 'Madrid', label: 'Madrid'},
    { value: 'Valencia', label: 'Valencia'},
    { value: 'Murcia', label: 'Murcia'},
    { value: 'Sevilla', label: 'Sevilla'},
    { value: 'Zaragoza', label: 'Zaragoza'}
]

export const IndustryOptions = [
    { value: 'IT', label: 'Programming and IT' },
    { value: 'Marketing', label: 'Marketing, PR and Communication' },
    { value: 'Education', label: 'Education' },
    { value: 'Retail', label: 'Retail' }
]

// THEMES

export default function customTheme(theme) {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'lightblue',
            primary: 'gray'
        }
    }
}

// VALIDATION AND FORM ERROR HANDLERS

