async function execute() {
  console.time('map')

  const squares = await Promise.all(numbers.map(async (number) => {
    await waitFor(2)
    return number * number
  }))

  console.log(squares)

  console.timeEnd('map')
}

execute()