
const list_users = async (req,res) => {
    console.log('ok')
    res.status(200).send({'users': true})
}

const get_user = async (req,res) => {
    res.status(200).send({'users': true})
}


const delete_user = async (req,res) => {
    res.status(200).send({'users': true})
}


const create_user = async (req,res) => {
    res.status(200).send({'users': true})
}

const update_user = async (req,res) => {
    res.status(200).send({'users': true})
}

const change_image = async (req,res) => {
    res.status(200).send({'users': true})
}


export {list_users,get_user,delete_user,change_image,create_user}