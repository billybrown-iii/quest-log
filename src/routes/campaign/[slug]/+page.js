export async function load ({params}) {
    // if you want the data to be fetched before the page is shown
    // (make the page slower to navigate to - user sees browser loading indicator)
    // then use this approach:
    
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve({value: `You traveled to slug: ${params.slug}`})
    //     }, 400)
    // })

    return {slug: params.slug};
}