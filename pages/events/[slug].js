import {useRouter} from 'next/router'
import Layout from '../../components/Layout'


export default function EventPage() {
    const router = useRouter()


    return (
        <Layout>
            <h1>My Event Page</h1>
        </Layout>
    )
}
