import Head from 'next/head'

const MyHead = ({title, description}) => {

    const pageTitle = title ? ` - ${title}` : '';
    const pageDescription = description || 'Developer testing for Renner';

    return <Head>
        <title>{`Renner Challenge${pageTitle}`}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content="Leandro Corso (contato@leandrocorso.com.br)" />
    </Head>
}

export default MyHead