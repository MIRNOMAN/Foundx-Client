import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";

export default function page() {
  
    const methods = useForm();

    const { control, handleSubmit } = methods;

    const { fields, append, remove } = useFieldArray({
      control,
      name: "questions",
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      const postData = {
        ...data,
        questions: data.questions.map((que: { value: string }) => que.value),
      };
  
      console.log(postData);
    };
  
    const handleFieldAppend = () => {
      append({ name: "questions" });
    };
  
    return (
      <div>
         <h1>User create post page</h1>
      </div>
    );
  }