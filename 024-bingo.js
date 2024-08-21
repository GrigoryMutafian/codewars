function bingo(ticket, win) {
  let count = 0;

  for (let i = 0; i < ticket.length; i++) {
    const hasWinTicket = ticket[i][0]
      .split("")
      .some((char) => char.charCodeAt(0) === ticket[i][1]);
    if (hasWinTicket === true) {
      count++;
    }
  }

  return count >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  ),
  "Loser!"
);
