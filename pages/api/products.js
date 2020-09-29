// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const products = [
  {
    id: "1",
    name: "analise benevides",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    pictures: "https://rstorer.herokuapp.com/images/analise-benevides-g91IKbPC04A-unsplash.jpg",
    price: 1999,
    discountPercent: 0.3
  },
  {
    id: "2",
    name: "recztra sazam",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    pictures: "https://rstorer.herokuapp.com/images/ussama-azam-5IcEBmSOQq0-unsplash.jpg",
    price: 3999,
    discountPercent: 0.5
  },
  {
    id: "3",
    name: "valerie elash",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
    pictures: "https://rstorer.herokuapp.com/images/valerie-elash-o1Ic6JdypmA-unsplash.jpg",
    price: 999,
  }
]
export default (req, res) => {
  setTimeout(() => {
    res.statusCode = 200
    res.json(products)
  }, 2000)
}
