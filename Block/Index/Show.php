<?php
namespace Excellence\AjaxTutorial\Block\Index;

class Show extends \Magento\Framework\View\Element\Template
{
    protected $crudFactory;

    public $_coreRegistry;

    public function __construct(\Magento\Framework\Registry $coreRegistry,
        \Magento\Framework\View\Element\Template\Context $context,
        \Excellence\Crud\Model\CrudFactory $dataFactory
    ) {
        $this->_coreRegistry = $coreRegistry;
        $this->crudFactory = $dataFactory;
        parent::__construct($context);
    }
    public function getUserData()
    {
        $registeredUser = $this->crudFactory->create();
        $collection = $registeredUser->getCollection();
        return $collection;
    }
}
?>

