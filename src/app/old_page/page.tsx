import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

const getRecipes = async (): Promise<Recipe[]> => {
  const result = await fetch("http://localhost:4000/recipes");

  // delayed response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return result.json();
};

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className={"max-w-6xl mx-auto my-12 flex flex-col gap-10"}>
      <h1
        className={
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-center"
        }
      >
        Recipes for Ninjas
      </h1>
      <div className={"grid grid-cols-3 gap-8"}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className={"flex flex-col justify-between"}>
            <CardHeader className={"flex-row gap-4 items-center"}>
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt={"recipe img"} />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className={"mt-2"}>{recipe.description}</p>
            </CardContent>
            <CardFooter className={"flex justify-between"}>
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant={"secondary"}>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        variant={"destructive"}
        className={"uppercase max-w-36 self-center"}
      >
        <Link href={"/"}>Take me back</Link>
      </Button>
    </main>
  );
}
