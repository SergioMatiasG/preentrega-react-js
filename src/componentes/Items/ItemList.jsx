import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import style from './style.module.css'

const ItemsList = ({ item }) => {
  return (
    <Card className={style.somanc}>
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-cover h-[340px]"
          src={item.image || 'img not foud'}
        />
      </CardBody>
      <CardFooter className="text-small flex-colum">
        <b>{item.title}</b>
        <Link to= {`/item/${item.id}`}>
          <Button className={style.botonnext}>
            Ver Producto
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default ItemsList