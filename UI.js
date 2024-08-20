return (
  <div>
    {moxieStats ? (
      <>
        <h2>Moxie Stats</h2>
        <p>Total Moxie: {moxieStats.totalMoxie}</p>
        <p>Moxie per day: {moxieStats.moxiePerDay}</p>
        <p>Moxie rank: {moxieStats.moxieRank}</p>
      </>
    ) : (
      <p>Loading Moxie stats...</p>
    )}
  </div>
);