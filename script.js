const date = localStorage.getItem("birth")
const div = document.getElementById("years")

const isDate = (date) => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date))
}

const diff_weeks = (dt2, dt1) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= 60 * 60 * 24 * 7
  return Math.abs(Math.round(diff))
}

if (isDate(date) && date != null) {
  let weekDiff = diff_weeks(new Date(), new Date(date))
  let weeks = weekDiff % 52
  let years = (weekDiff - weeks) / 52
  console.log(years, weeks)
  for (let i = 0; i < 4160; i += 1) {
    console.log(i)
    if (i < weekDiff) {
      div.innerHTML += "<div class='week'>🟩</div>"
    } else {
      div.innerHTML += "<div class='week'>🟪</div>"
    }
  }
} else {
  let input = prompt("Please enter your birth date! Format: [dd.mm.yyyy] Example: 19.08.2006")

  let nums = input.split(".")

  if (nums.length === 3) {
    let test = new Date(nums[2], nums[1], nums[0])
    localStorage.setItem("birth", test)
    location.reload()
  }
}
