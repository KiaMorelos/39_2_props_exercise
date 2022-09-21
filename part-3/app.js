const App = () => {
    return (
    <div>
      <Person
        name="Adrien"
        age={28}
        hobbies={["four wheeling", "gaming", "origami"]}
      />
      <Person name="Beth" age={27} hobbies={["sewing", "jewelery making", "concert going"]} />
      <Person
        name="Kia"
        age={28}
        hobbies={["knitting", "gaming", "crocheting"]}
      />
      <Person
        name="Koda"
        age={4}
        hobbies={["playing with toy cars", "the floor is lava game", "learning spanish"]}
      />
    </div>
    )
}