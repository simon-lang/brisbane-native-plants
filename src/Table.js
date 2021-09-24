const formatType = (type) => {
  return type.replace(/-.+$/g, "");
};

function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            const className = classNames({
              link: true,
              "cursor-pointer": true,
              "hover:bg-green-500 hover:bg-opacity-10": true,
              // "bg-green-500 bg-opacity-25": selected && selected.index === d.index,
            });
            return (
              <tr className={className}>
                <td>{formatType(d.type)}</td>
                <td>{d.name}</td>
                <td>{d.commonName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
