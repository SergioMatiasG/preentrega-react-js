import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export const Item = ({item}) => {
    return (
        // <p> Producto: {prop.name} - Precio: {prop.precio}</p>

        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[140px]"
              src={item.img || 'img not foud'}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.precio}</p>
          </CardFooter>
        </Card>
    )
}
