// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

// parameters: salary: int/positive? / bonus: boolean ===> true => salary *10 / false => salary*1
// return: string '£'+salary
// examples: 100 => true: 1000 / false: 100 /// 1 => true: 100 / false: 1 /// 19 => true 1900 / false 19

const bonusTime = (salary, bonus) => {
  //bonus: boolean ===> true => salary *10 / false => salary*1
  return bonus ? "£" + salary * 10 : "£" + salary;
};
