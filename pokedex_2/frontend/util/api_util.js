export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const requestSinglePokemon = id => (
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`
  })
)