export default function Board(){

    const styles = {
        column: {
            float: "left",
            width: "33.3%"
        }
    }
    return (
        <>
            <main className='flex justify-center w-4/5 ml-72'>
                <section style={styles.column}>
                    Went Well
                </section>
                <section style={styles.column}>
                    To Improve
                </section>
                <section style={styles.column}>
                    Action Items
                </section>
            </main>
            <br></br><br></br>
            Helo board
        </>
    )
}