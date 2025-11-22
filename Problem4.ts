type value = {
  title: string;
  rating: number;
};

function filterByRating(Value: value[]): value[] {
  return Value.filter(data => data.rating >= 4);
}






