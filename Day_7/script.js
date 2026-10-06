import jobs from "./jobs";

const jobContainer=document.getElementsByClassName("job-container")

const boxes=jobs.map((job , idx)=>{
const dateCon = document.createElement("div")
const headingCon = document.createElement("div")
const box = document.createElement("div")
const tagcon = document.createElement("div")

dateCon.innerText = job.date
headingCon.innerText = job.title
job.tags.map((tag,i) =>{
    const tag = document.createElement("span")
    tag.innerText = t
})

})
jobContainer.appendChild(boxes)

