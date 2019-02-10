import "reflect-metadata";

const logType = (target: any, key: string): void => {
  const type = Reflect.getMetadata("design:type", target, key);
  if (!type) {
    console.log("couldn't get the type :(");
    return;
  }
  console.log(`${key} type: ${type.name}`);
};

class Demo {
  @logType
  public someProperty: number = 0;
}

new Demo();
