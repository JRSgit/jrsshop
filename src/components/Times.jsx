

function Times () {
  return(
    <section className='grid grid-cols-1 w-full h-fit mt-5 md:p-10'>
              <h1 className='w-full font-light md:text-4xl text-4xl text-center  mt-10 '>
                Em alta
              </h1>
              <div className='flex flex-col w-full h-full md:p-10  p-2 rounded-md'>
                <div className='grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-2 w-full h-full'>
                  {
                    data && (
                      data.map((pro, i) => (
                        i < 6 &&
                        <Card
                          onclick={() => handleClickDetails(pro._id)}
                          id={pro._id}
                          key={i}
                          n={i}
                          name={pro.title}
                          price={pro.price}
                          description={pro.content}
                          img={pro.url[0]}
                        />

                      ))

                    )
                  }

                </div>
              </div>
      </section>
  )
}

export default Times