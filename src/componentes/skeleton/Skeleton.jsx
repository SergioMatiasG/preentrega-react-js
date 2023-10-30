import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import './Skeleton.css'

const SkeletonS = () => {
    return (
        <div className="contenedor-skeleton">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4" >
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg card-fondo-b">
                        <div className="h-24 rounded-lg"></div>
                    </Skeleton>
                    <div className="space-y-3 card-fondo">
                        <Skeleton className="w-3/5 rounded-lg card-fondo-b">
                            <div className="h-3 w-3/5 rounded-lg "></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg card-fondo-b">
                            <div className="h-3 w-4/5 rounded-lg "></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg card-fondo-b">
                            <div className="h-3 w-2/5 rounded-lg "></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg card-fondo"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg card-fondo"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg card-fondo"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card> 
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 card-fondo" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
            </div>
        </div>
    );
}
export default SkeletonS