
export const allPerks = [
    {perkId: "perk1", label: 'Restaurant discounts'},
    {perkId: "perk2", label: 'Gym membership'},
    {perkId: "perk3", label: 'Nursery'},
    {perkId: "perk4", label: 'Birthdays off'},
    {perkId: "perk5", label: 'Flexible schedule'},
    {perkId: "perk6", label: 'Free coffee'},
    {perkId: "perk7", label: 'Free fruit and snacks'},
    {perkId: "perk8", label: 'Relaxing employee area'},
    {perkId: "perk9", label: 'Good views'},
    {perkId: "perk10", label: 'Fully equipped kitchen'},
    {perkId: "perk11", label: 'Open offices'},
    {perkId: "perk12", label: 'Training'},
    {perkId: "perk13", label: 'Health insurance'},
    {perkId: "perk14", label: 'Free parking'},
    {perkId: "perk15", label: 'Employee bonus plan'}
]

export function getPerkIndex(perkName) {
    let perkIndex = -1;
    allPerks.forEach((perk, i) => {
    if (perk.perkId === perkName) { 
        perkIndex = i;
        } 
    })
    return perkIndex;
}
    
