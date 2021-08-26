var form = document.getElementById("mainForm")


const fetchOrg = async (org) => {
    console.log(org)
    const apiCall = await fetch(`https://api.github.com/orgs/${org}/repos`)
    const data = await apiCall.json();
    console.log(data)
    return {data}
};

const showData = () => {
    fetchOrg(input.value).then((res) => {

        res.data.map((obj) => {
            container.innerHTMl = `Repo: <span class="data>"${obj.name}</span>`
        })
        
    })
};

if(form){
    form.addEventListener('Submit', showData())
}

