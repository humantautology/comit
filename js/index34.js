let income = 1000;
let revenue = 600;
let taxes = 500;

let incomeObjective = 800;
let revenueObjectiveForBonus = 600;
let taxesObjective = 400;

let incomeAnalysis = `Income Objective: Is income higher than projected? True or False? ${income >= incomeObjective}`
console.log(incomeAnalysis);

let bonusAnalysis = `Bonus Objective: Is revenue $600? True or false? ${revenue == revenueObjectiveForBonus}`;
console.log(bonusAnalysis);

let taxesAnalysis = `Taxes Objective: Less than $400 on taxes? True or false? ${taxes < taxesObjective}`;
console.log(taxesAnalysis);


