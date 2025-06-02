import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

const SingleUserPage = () => {
    return (
        <div>
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Mairi Tikk</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
            </Breadcrumb>{/*Container*/}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/*left*/}
                <div className=""></div>
                {/*right*/}
                <div className=""></div>
            </div>
        </div>
        

    )
}
export default SingleUserPage