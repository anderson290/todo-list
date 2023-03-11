import { PlusCircle, Trash, CheckCircle, Circle } from "phosphor-react";
import { useEffect, useState } from "react";
import clipboardIcon from "../../assets/clipboard.svg";
import Button from "../Button";
import {
  Input,
  InputContainer,
  InputContainerCheck,
  InputContainerRemove,
  ListHeaderContainer,
  ListHeaderLabel,
  ListHeaderLabelBullet,
  ListItemContainer,
  NoDataContainer,
  NoDataLogo,
  NoDataSubitle,
  NoDataTitle,
} from "./styles";

const List = () => {
  const [tasks, setTaskList] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event: any) => {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  };

  const createTask = () => {
    const newObjTask = {
      id: tasks.length + 1,
      body: newTask,
      checked: false,
    };
    setTaskList([...tasks, newObjTask]);
    setNewTask("");
  };

  const removeTask = (taskToRemove: string) => {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToRemove;
    });
    setTaskList(taskWithoutDeletedOne);
  };

  const checkTask = (taskToCheck: any) => {
    const currentTask = taskToCheck;
    tasks.filter((task) => {
      if (task.id === currentTask.id && currentTask.checked === false) {
        currentTask.checked = true;
        taskToCheck.checked = true;
      } else if (task.id === currentTask.id && currentTask.checked === true) {
        currentTask.checked = false;
      }
    });

    const x = tasks.map((task) => {
      if (task.id === currentTask.id) {
        return currentTask;
      } else {
        return task;
      }
    });

    setTaskList(x);
  };

  const ListItem = ({ task, children, onCheckTask, onRemoveTask }: any) => {
    return (
      <ListItemContainer>
        <InputContainerCheck onClick={onCheckTask}>
          {task.checked ? (
            <CheckCircle color={"#8284FA"} size={20} />
          ) : (
            <Circle size={20} color="#4EA8DE" />
          )}
        </InputContainerCheck>
        {children}
        <InputContainerRemove onClick={onRemoveTask} title="Deletar task">
          <Trash size={24} />
        </InputContainerRemove>
      </ListItemContainer>
    );
  };

  const NoDataView = () => {
    return (
      <NoDataContainer>
        <NoDataLogo src={clipboardIcon} alt="" />
        <div>
          <NoDataTitle>Você ainda não tem tarefas cadastradas </NoDataTitle>
          <NoDataSubitle>
            Crie tarefas e organize seus itens a fazer
          </NoDataSubitle>
        </div>
      </NoDataContainer>
    );
  };

  const handleFinishedTasks = () => {
    const finishedTasks = tasks.filter((task) => task.checked === true);
    return finishedTasks.length;
  };

  useEffect(() => {
    setTaskList([
      {
        id: 1,
        body: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        checked: false,
      },
      {
        id: 2,
        body: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        checked: false,
      },
      {
        id: 3,
        body: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        checked: false,
      },
      {
        id: 4,
        body: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        checked: false,
      },
      {
        id: 5,
        body: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        checked: false,
      },
    ]);
  }, []);
  return (
    <>
      <InputContainer>
        <Input
          type={"text"}
          placeholder={"Adicione uma nova tarefa"}
          onChange={handleNewTaskChange}
        />
        <Button onClick={createTask}>
          <span>Criar</span>
          <PlusCircle size={22} />
        </Button>
      </InputContainer>
      <ListHeaderContainer>
        <ListHeaderLabel variant="primary">
          Tarefas Criadas{" "}
          <ListHeaderLabelBullet>{tasks.length}</ListHeaderLabelBullet>
        </ListHeaderLabel>
        <ListHeaderLabel variant="secondary">
          Concluídas{" "}
          <ListHeaderLabelBullet>
            {handleFinishedTasks()} de {tasks.length}
          </ListHeaderLabelBullet>
        </ListHeaderLabel>
      </ListHeaderContainer>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <ListItem
              key={task.id}
              task={task}
              onCheckTask={() => {
                checkTask(task);
              }}
              onRemoveTask={() => {
                removeTask(task);
              }}
            >
              <p style={ task.checked ?{ textDecoration: "line-through" }: {}}>{task.body}</p> 
            </ListItem>
          );
        })}
      {tasks.length === 0 && <NoDataView />}
    </>
  );
};

export default List;
