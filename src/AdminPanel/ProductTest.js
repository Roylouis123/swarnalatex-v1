

export default function ProductTest () {
    const [color,setColor] = useState(colors)

    const handleChange = (event) => {
        // updating an object instead of a Map
        setColor({...checkedItems, [event.target.name] : event.target.checked });
    }

    const colors=[
    {
        color:red,
        value: ''
    },
    {
        color:orange,
        value: ''
    }
    ]
    return (
        color.map(item => (
            <label key={item.key}>
                {item.color}
                <Checkbox name={item.color} checked={colors[item.value]} onChange={handleChange} />
            </label>
         ))

    )
}