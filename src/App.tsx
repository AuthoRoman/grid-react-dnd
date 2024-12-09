import { useForm, useFieldArray } from "react-hook-form";
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";
import "./App.css";
function App() {
  const { register, control } = useForm({
    defaultValues: {
      test: [
        { id: "1", items: "flight", firstName: "ABOBUS" },
        { id: "2", items: "ABOBUS", firstName: "Add Description" },
        { id: "3", items: "carBus", firstName: "Add Description" },
        { id: "4", items: "flight", firstName: "Add Description" },
        { id: "5", items: "train", firstName: "Add Description" },
        { id: "6", items: "carBus", firstName: "Add Description" },
        { id: "7", items: "flight", firstName: "Add Description" },
        { id: "8", items: "train", firstName: "Add Description" },
        { id: "9", items: "carBus", firstName: "Add Description" },
      ],
    },
  });

  const { fields, append, move, remove } = useFieldArray({
    control,
    name: "test",
  });

  const handleDrag = (oldIndex: number, newIndex: number) => {
    if (newIndex !== undefined) {
      move(oldIndex, newIndex);
    }
  };

  return (
    <form>
      <h1>Drag and Drop Field Array</h1>

      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <SortableList
          onSortEnd={handleDrag}
          className="form"
          draggedItemClassName="dragged"
        >
          {fields.map((item, index) => (
            <SortableItem key={item.id || index}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <select
                  defaultValue={item.items}
                  {...register(`test.${index}.items`)}
                >
                  <option value="">Select</option>
                  <option value="flight">Travel via flight</option>
                  <option value="train">Travel via Train</option>
                  <option value="carBus">Travel via car or bus</option>
                </select>

                <input
                  defaultValue={item.firstName}
                  {...register(`test.${index}.firstName`)}
                />

                <SortableKnob>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "skyblue",
                      padding: "5px 10px",
                      cursor: "grab", // Важный стиль для обозначения перетаскиваемости
                      borderRadius: "4px",
                    }}
                  >
                    Drag Me
                  </div>
                </SortableKnob>
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </div>

      <section>
        <button
          type="button"
          onClick={() => {
            append({
              id: `${fields.length + 1}`,
              items: "flight",
              firstName: "Append Description",
            });
          }}
        >
          Append
        </button>

        <button
          type="button"
          onClick={() => {
            if (fields.length > 1) move(0, 1);
          }}
        >
          Move
        </button>

        <button
          type="button"
          onClick={() => {
            if (fields.length > 0) remove(0);
          }}
        >
          Remove
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

export default App;
