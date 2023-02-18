import { useParams } from "react-router-dom"

const Account = () => {
    const { id } = useParams()
    return (
        <>
            Account {id}
        </>
    )
}

export default Account;