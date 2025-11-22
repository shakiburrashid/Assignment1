type value = {
  title: string;
  rating: number;
};

function filterByRating(Value: value[]): value[] {
  return Value.filter(data => data.rating >= 4);
}




const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

